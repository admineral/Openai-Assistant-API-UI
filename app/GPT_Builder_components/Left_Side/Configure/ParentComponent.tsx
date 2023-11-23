// ParentComponent.tsx
import React, { useState } from 'react';
import Capabilities from './Skills/Capabilities';
import UploadFiles_Configure from './Upload_Left/UploadFiles_2';
import CrawlerInput from './Skills/Crawler/CrawlerInput'; // Add this line


const ParentComponent = () => {
  const [knowledgeRetrieval, setKnowledgeRetrieval] = useState(true);
  const [webCrawler, setWebCrawler] = useState(false);

  return (
    <>
    <Capabilities 
      knowledgeRetrieval={knowledgeRetrieval} 
      setKnowledgeRetrieval={setKnowledgeRetrieval}
      webCrawler={webCrawler} 
      setWebCrawler={setWebCrawler} 
    />      
    {knowledgeRetrieval && <UploadFiles_Configure />}
    {webCrawler && <CrawlerInput />}
    </>
  );
};

export default ParentComponent;