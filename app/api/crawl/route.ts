// pages/api/crawl.ts
import { NextRequest, NextResponse } from 'next/server';
import { crawl, write } from '../../GPT_Builder_components/Left_Side/Configure/Skills/Crawler/core';
import { Config } from '../../GPT_Builder_components/Left_Side/Configure/Skills/Crawler/config';

export async function POST(req: NextRequest) {
  // Parse the request body to get the URL to crawl
  const { url } = await req.json();
  console.log('Received URL:', url); // Log the received URL

  // Define the configuration for the crawl
  const config: Config = {
    url,
    match: '**/*.html',
    selector: 'body',
    maxPagesToCrawl: 100,
    outputFileName: 'output.json',
  };

  try {
    console.log('Starting crawl...'); // Log the start of the crawl
    await crawl(config);
    console.log('Crawl completed. Writing results...'); // Log the completion of the crawl
    await write(config);
    console.log('Results written.'); // Log the completion of the write operation
    return NextResponse.json({ message: 'Crawl successful' });
  } catch (error) {
    console.error('Error during crawl:', error); // Log any error that occurs
    return NextResponse.json({ error: 'Error during crawl' });
  }
};