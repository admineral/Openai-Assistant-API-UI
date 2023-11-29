// ConfigureContent.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NameDescriptionInstructions from './Assistant_Details/NameDescriptionInstructions';
import UploadFiles from "./Upload_Left/UploadFiles_2";
import Capabilities from './Skills/Capabilities';
import CrawlerInput from './Skills/Crawler/CrawlerInput';

interface FileData {
  name: string;
  fileId?: string;
  status?: 'uploading' | 'uploaded' | 'failed';
}

interface ConfigureContentProps {
  knowledgeRetrieval: boolean;
  setKnowledgeRetrieval: React.Dispatch<React.SetStateAction<boolean>>;
  files: FileData[];
  setFiles: React.Dispatch<React.SetStateAction<FileData[]>>;
  name: string; // Add this line
  setName: React.Dispatch<React.SetStateAction<string>>; // Add this line
  instructions: string; // Add this line
  setInstructions: React.Dispatch<React.SetStateAction<string>>; // Add this line
}

const ConfigureContent: React.FC<ConfigureContentProps> = ({ knowledgeRetrieval, setKnowledgeRetrieval, files, setFiles, name, setName, instructions, setInstructions }) => {
  const [showAddActions, setShowAddActions] = useState(false);
  const [webCrawler, setWebCrawler] = useState(false);

  return (
    <div className="space-y-0">
      <NameDescriptionInstructions name={name} setName={setName} instructions={instructions} setInstructions={setInstructions} /> {/* Pass the props here */}
      <Capabilities
        knowledgeRetrieval={knowledgeRetrieval}
        setKnowledgeRetrieval={setKnowledgeRetrieval}
        webCrawler={webCrawler}
        setWebCrawler={setWebCrawler}
      />
      {knowledgeRetrieval && <UploadFiles files={files} setFiles={setFiles} />}
      {webCrawler && <CrawlerInput />}
    </div>
  );
};

export default ConfigureContent;