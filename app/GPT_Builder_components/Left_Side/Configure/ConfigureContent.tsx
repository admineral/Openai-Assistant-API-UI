// ConfigureContent.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NameDescriptionInstructions from './Assistant_Details/NameDescriptionInstructions';
import UploadFiles from "./Upload_Left/UploadFiles_2";
import Capabilities from './Skills/Capabilities';
import CrawlerInput from './Skills/Crawler/CrawlerInput'; // Add this line


const ConfigureContent = () => {
  const [showAddActions, setShowAddActions] = useState(false);
  const [knowledgeRetrieval, setKnowledgeRetrieval] = useState(false); // Zustand für knowledgeRetrieval
  const [webCrawler, setWebCrawler] = useState(false); // Zustand für webCrawler

  return (
    <div className="space-y-0"> {/* Adjust the space as needed */}
      <NameDescriptionInstructions />
     
      <Capabilities 
        knowledgeRetrieval={knowledgeRetrieval} 
        setKnowledgeRetrieval={setKnowledgeRetrieval}
        webCrawler={webCrawler} 
        setWebCrawler={setWebCrawler} 
      />

      {knowledgeRetrieval && <UploadFiles />}
      {webCrawler && <CrawlerInput />} {/* Add this line */}
    </div>
  );
};

export default ConfigureContent;