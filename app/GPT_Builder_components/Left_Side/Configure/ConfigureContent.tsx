// ConfigureContent.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NameDescriptionInstructions from './Assistant_Details/NameDescriptionInstructions';
import UploadFiles from "./Upload_Left/UploadFiles_2";
import Capabilities from './Skills/Capabilities';

const ConfigureContent = () => {
  const [showAddActions, setShowAddActions] = useState(false);
  const [knowledgeRetrieval, setKnowledgeRetrieval] = useState(false); // Zustand für knowledgeRetrieval

  return (
    <div className="space-y-0"> {/* Adjust the space as needed */}
      <NameDescriptionInstructions />
     
      <Capabilities 
        knowledgeRetrieval={knowledgeRetrieval} 
        setKnowledgeRetrieval={setKnowledgeRetrieval} 
      />

      {knowledgeRetrieval && <UploadFiles />}
    </div>
  );
};

export default ConfigureContent;