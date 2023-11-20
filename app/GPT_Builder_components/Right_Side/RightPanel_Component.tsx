import React from 'react';
import AssistantChat from './Chat_Assistant/AssistantChat_API_Right';
import MessageInput_Right from './Chat_Assistant/Chat_Assistant_Input_Message/MessageInput_Right';

const RightPanel = () => {
  return (
    <div className="w-1/2 bg-gray-800 p-8 flex flex-col justify-between">
      <AssistantChat />
      <MessageInput_Right placeholder="Test your Assistant..." />
    </div>
  );
};

export default RightPanel;