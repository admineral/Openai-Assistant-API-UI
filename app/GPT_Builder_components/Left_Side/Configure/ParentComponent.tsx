// ParentComponent.tsx
import React, { useState } from 'react';
import Capabilities from './Skills/Capabilities';
import UploadFiles_Configure from './Upload_Left/UploadFiles_2';
import CrawlerInput from './Skills/Crawler/CrawlerInput';

interface FileData {
  name: string;
  fileId?: string;
  status?: 'uploading' | 'uploaded' | 'failed';
}

const ParentComponent = () => {
  const [knowledgeRetrieval, setKnowledgeRetrieval] = useState(true);
  const [webCrawler, setWebCrawler] = useState(false);
  const [files, setFiles] = useState<FileData[]>([]); // Add this line

  return (
    <>
      <Capabilities 
        knowledgeRetrieval={knowledgeRetrieval} 
        setKnowledgeRetrieval={setKnowledgeRetrieval}
        webCrawler={webCrawler} 
        setWebCrawler={setWebCrawler} 
      />      
      {knowledgeRetrieval && <UploadFiles_Configure files={files} setFiles={setFiles} />} {/* Pass the props here */}
      {webCrawler && <CrawlerInput />}
    </>
  );
};

export default ParentComponent;