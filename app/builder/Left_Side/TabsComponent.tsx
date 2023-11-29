// TabsComponent.tsx
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import CreateContent from './Create/CreateContent';
import ConfigureContent from './Configure/ConfigureContent';
import Chat from './Create/Chat/ChatBot';
import { Message } from './LeftPanel_Component';

interface FileData {
  name: string;
  fileId?: string;
  status?: 'uploading' | 'uploaded' | 'failed';
}

type TabsComponentProps = {
  activeTab: string;
  messages: Message[];
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  instructions: string;
  setInstructions: Dispatch<SetStateAction<string>>;
};

const TabsComponent: React.FC<TabsComponentProps> = ({ activeTab, messages, name, setName, instructions, setInstructions }) => {
  const [knowledgeRetrieval, setKnowledgeRetrieval] = useState(true);
  const [files, setFiles] = useState<FileData[]>([]);

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
          name={name} 
          setName={setName} 
          instructions={instructions} 
          setInstructions={setInstructions} 
        />
      </TabsContent>
    </Tabs>
  );
};

export default TabsComponent;