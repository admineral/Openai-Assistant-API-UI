// TabsComponent.tsx
import React, { useState } from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import CreateContent from './Create/CreateContent';
import ConfigureContent from './Configure/ConfigureContent';
import Chat from './Create/Chat/ChatBot';

type Message = {
  id: string;
  role: 'user' | 'assistant' | 'function' | 'system';
  content: string;
};

interface FileData {
  name: string;
  fileId?: string;
  status?: 'uploading' | 'uploaded' | 'failed';
}

interface TabsComponentProps {
  activeTab: string;
  messages: Message[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ activeTab, messages }) => {
  const [knowledgeRetrieval, setKnowledgeRetrieval] = useState(true);
  const [files, setFiles] = useState<FileData[]>([]);
  const [name, setName] = useState(''); // Add this line
  const [instructions, setInstructions] = useState(''); // Add this line

  return (
    <Tabs value={activeTab} className="h-full flex flex-col">
      <TabsContent value="create" className="flex-grow overflow-auto">
        <CreateContent messages={messages} />
        {activeTab === 'create' && <Chat messages={messages} />}
      </TabsContent>
      <TabsContent value="configure">
        <ConfigureContent 
          knowledgeRetrieval={knowledgeRetrieval} 
          setKnowledgeRetrieval={setKnowledgeRetrieval} 
          files={files} 
          setFiles={setFiles} 
          name={name} // Add this line
          setName={setName} // Add this line
          instructions={instructions} // Add this line
          setInstructions={setInstructions} // Add this line
        />
      </TabsContent>
    </Tabs>
  );
};

export default TabsComponent;