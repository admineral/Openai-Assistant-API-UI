// Chat.tsx
import React from 'react';

type Message = {
  id: string;
  role: 'user' | 'assistant' | 'function' | 'system';
  content: string;
};

interface ChatProps {
  messages: Message[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className="chat-container flex flex-col h-full bg-dark-900 p-4">
      <div className="messages-list flex-grow overflow-auto">
        {messages.map((message) => (
          <div key={message.id} className={`message flex items-center gap-2 my-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.role === 'assistant' && (
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                A
              </div>
            )}
            {message.role === 'function' && (
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white">
                F
              </div>
            )}
            <div className={`${message.role === 'user' ? 'bg-blue-700' : 'bg-gray-700'} text-gray-100 text-sm md:text-base p-3 rounded-lg shadow`}>
              {message.content}
            </div>
            {message.role === 'user' && (
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white">
                U
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;