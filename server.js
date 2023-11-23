const express = require('express');
const { PlaywrightCrawler } = require('crawlee');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

app.post('/crawl', async (req, res) => {
  console.log('Received request:', req.body);
  const { url, maxPagesToCrawl = 1 } = req.body;

  let rawExtraction = [];
  let finalExtraction = [];


  const selectors = [
    'main', 'article', '.article', '#article', '.post-content', 
    '.entry-content', '.content', '#content', '.main', '#main', 
    '.doc', '#doc', '.documentation', '#documentation', '.text', 
    '#text', 'section', '.blog-post', '#blog-post', '.news-article',
    '#news-article', '.post-body', '#post-body', '.article-body',
    '#article-body', '.article-content', '#article-content', '.post-content',
    '#post-content', '.blog-content', '#blog-content', '.news-content',
    '#news-content', '.text-content', '#text-content', '.main-content',
    '#main-content', '.main-article', '#main-article', '.post-article',
    '#post-article', '.blog-article', '#blog-article', '.news-article',
    '#news-article', '.story', '.story-content', '.post', '.post-inner',
    '.entry', '.entry-inner', '.page', '.page-inner', '.text-block',
    '.text-wrapper', '.content-area', '.content-inner', '.content-wrapper',
    '.content-main', '.article-text', '.article-inner', '.article-wrapper',
    '.post-text', '.post-inner', '.post-wrapper', '.blog-text', 
    '.blog-inner', '.blog-wrapper', '.news-text', '.news-inner', 
    '.news-wrapper'
  ];

  const crawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: maxPagesToCrawl,
    async requestHandler({ request, page, enqueueLinks, log, pushData }) {
      try {
        const title = await page.title();
        let content = await page.evaluate(() => {
          const element = document.querySelector('body');
          return element ? element.innerText : '';
        });

        log.info(`Title of ${request.loadedUrl} is '${title}'`);

        // Add the crawled data to the array and save it to a file
        rawExtraction.push({ title, url: request.loadedUrl, content });
        fs.writeFileSync(path.join(__dirname, 'public', 'raw_extraction.txt'), JSON.stringify(rawExtraction));

        // Extract specific content using selectors
        content = await page.evaluate((selectors) => {
          let element;
          for (const selector of selectors) {
            element = document.querySelector(selector);
            if (element) {
              break;
            }
          }
          // Fallback to the entire body if no matching element is found
          if (!element) {
            element = document.querySelector('body');
          }
          return element ? element.innerText : '';
        }, selectors);

        // Add the crawled data to the array and save it to a file
        finalExtraction.push({ title, url: request.loadedUrl, content });
        fs.writeFileSync(path.join(__dirname, 'public', 'final_extraction.txt'), JSON.stringify(finalExtraction));

        // Extract links from the current page
        // and add them to the crawling queue.
        await enqueueLinks();
        log.info(`Links enqueued for ${request.loadedUrl}`);
      } catch (error) {
        log.error(`Error processing ${request.loadedUrl}: ${error.message}`);
      }
    },
  });

  try {
    console.log('Starting crawl...');
    await crawler.run([url]);
    console.log('Crawl completed.');

    // Send the download links in the response
    res.json({ 
      message: 'Crawl successful', 
      downloadLinks: {
        rawExtraction: `http://localhost:3001/raw_extraction.txt`,
        finalExtraction: `http://localhost:3001/final_extraction.txt`
      }
    });
    console.log('Sending response:', { message: 'Crawl successful' });
  } catch (error) {
    console.error('Error during crawl:', error);
    res.json({ error: 'Error during crawl' });
    console.log('Sending response:', { error: 'Error during crawl' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});