// LeftPanel_Component.tsx
import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import TabsComponent from './TabsComponent';
import { Button } from "@/components/ui/button";
import MessageInput from './Create/MessageInput_Left';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

const LeftPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = (newContent: string) => {
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: newContent,
    };
    setMessages([...messages, newUserMessage]);

    setIsSending(true);
    setTimeout(() => {
      const newAssistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'This is a simulated response from the assistant.',
      };
      setMessages((currentMessages) => [...currentMessages, newAssistantMessage]);
      setIsSending(false);
    }, 2000);
  };

  return (
    <div className="w-1/2 bg-gray-800 p-8 flex flex-col h-screen">
      <div className="flex mb-2">
        <Button 
          onClick={() => setActiveTab('create')}
          className={`flex-1 ${activeTab === 'create' ? 'bg-white text-gray-900 shadow-lg' : 'bg-gray-700 text-gray-400'} py-2 px-4 rounded-l-lg transition duration-300 ease-in-out`}
        >
          Create
        </Button>
        <Button 
          onClick={() => setActiveTab('configure')}
          className={`flex-1 ${activeTab === 'configure' ? 'bg-white text-gray-900 shadow-lg' : 'bg-gray-700 text-gray-400'} py-2 px-4 rounded-r-lg transition duration-300 ease-in-out`}
        >
          Configure
        </Button>
      </div>
      <ScrollArea className="flex-grow">
        <TabsComponent activeTab={activeTab} messages={messages} />
      </ScrollArea>
      {activeTab === 'create' && (
        <MessageInput
          onSendMessage={handleSendMessage}
          isLoading={isSending}
        />
      )}
    </div>
  );
};

export default LeftPanel;