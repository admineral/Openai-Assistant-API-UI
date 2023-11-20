// Chat.tsx
import React from 'react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

interface ChatProps {
  messages: Message[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className="chat-container flex flex-col h-full bg-dark-900 p-4"> {/* Use a very dark shade for background */}
      <div className="messages-list flex-grow overflow-auto">
        {messages.map((message) => (
          <div key={message.id} className={`message flex items-center gap-2 my-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.role === 'assistant' && (
              // Assistant message icon placeholder
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                {/* Replace with actual icon */}
                A
              </div>
            )}
            <div className={`${message.role === 'user' ? 'bg-blue-700' : 'bg-gray-700'} text-gray-100 text-sm md:text-base p-3 rounded-lg shadow`}> {/* Soften the bubble colors and use shadows */}
              {message.content}
            </div>
            {message.role === 'user' && (
              // User message icon placeholder
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white">
                {/* Replace with actual icon */}
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
