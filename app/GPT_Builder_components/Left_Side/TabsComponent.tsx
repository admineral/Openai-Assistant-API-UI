// TabsComponent.tsx
import React from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import CreateContent from './Create/CreateContent';
import ConfigureContent from './Configure/ConfigureContent';
import Chat from './Create/Chat/ChatBot';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

interface TabsComponentProps {
  activeTab: string;
  messages: Message[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ activeTab, messages }) => {
  return (
    <Tabs value={activeTab} className="h-full flex flex-col">
      <TabsContent value="create" className="flex-grow overflow-auto">
        <CreateContent messages={messages} />
        {activeTab === 'create' && <Chat messages={messages} />}
      </TabsContent>
      <TabsContent value="configure">
        <ConfigureContent />
      </TabsContent>
    </Tabs>
  );
};

export default TabsComponent;