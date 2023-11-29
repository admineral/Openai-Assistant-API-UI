// app/GPT_Builder_components/Left_Side/Configure/Skills/Crawler/CrawlerInput.tsx
import React, { useState, ChangeEvent } from 'react';
import { Input } from '@/components/ui/input'; // Import Input from Shadcn
import { Button } from '@/components/ui/button'; // Import Button from Shadcn

const CrawlerInput: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [crawlFinished, setCrawlFinished] = useState<boolean>(false);
  const [downloadLink, setDownloadLink] = useState<string>('');

  const startCrawl = async () => {
    console.log('Start crawl button clicked. URL:', url);
    try {
      const response = await fetch('http://localhost:3001/crawl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      console.log('Response from server:', data);

      // Assume the server returns a download link in the response
      setDownloadLink(data.downloadLink);
      setCrawlFinished(true);
    } catch (error) {
      console.error('Crawl failed', error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    console.log('URL input changed. New value:', event.target.value);
  };

  return (
    <div>
      {/* Use Shadcn Input component for stylish input */}
      <Input value={url} onChange={handleInputChange} placeholder="Enter URL" />

      {/* Use Shadcn Button component for stylish button */}
      <Button onClick={startCrawl} color="primary">Start Crawl</Button>

      {/* Show download button when crawl is finished */}
      {crawlFinished && (
        <a href={downloadLink} download style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '4px', marginTop: '10px' }}>
          Download Data
        </a>
      )}
    </div>
  );
}

export default CrawlerInput;