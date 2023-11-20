// ParentComponent.tsx
import React, { useState } from 'react';
import Capabilities from './Skills/Capabilities';
import UploadFiles_Configure from './Upload_Left/UploadFiles_2';

const ParentComponent = () => {
  const [knowledgeRetrieval, setKnowledgeRetrieval] = useState(true);

  return (
    <>
      <Capabilities knowledgeRetrieval={knowledgeRetrieval} setKnowledgeRetrieval={setKnowledgeRetrieval} />
      {knowledgeRetrieval && <UploadFiles_Configure />}
    </>
  );
};

export default ParentComponent;