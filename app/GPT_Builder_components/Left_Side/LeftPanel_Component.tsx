// LeftPanel_Component.tsx
import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import TabsComponent from './TabsComponent';
import { Button } from "@/components/ui/button";
import MessageInput from './Create/MessageInput_Left';
import { useChat } from 'ai/react'; // Import useChat



export type Message = {
  id: string;
  role: 'user' | 'assistant' | 'function' | 'system';
  content: string;
};


const LeftPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [name, setName] = useState(''); // Add this line
  const [instructions, setInstructions] = useState(''); // Add this line

  // Use useChat hook from Vercel AI SDK
  const { messages, append, isLoading } = useChat();

  // Function to handle sending of messages
  const handleSendMessage = async (message: string) => {
    console.log(`Sending message: ${message}`); // Log the message being sent
    await append({ role: 'user', content: message }); // Append the message to the chat
  };

  return (
<div className="w-1/2 bg-gray-800 p-8 flex flex-col h-screen border-r border-blue-100">
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
  <TabsComponent 
    activeTab={activeTab} 
    messages={messages} 
    name={name} 
    setName={setName} 
    instructions={instructions} 
    setInstructions={setInstructions} 
  />
</ScrollArea>
      {activeTab === 'create' && (
        <MessageInput
          onSendMessage={handleSendMessage} // Pass handleSendMessage as prop to MessageInput
          isLoading={isLoading} // Pass isLoading as prop to MessageInput
        />
      )}
    </div>
  );
};

export default LeftPanel;