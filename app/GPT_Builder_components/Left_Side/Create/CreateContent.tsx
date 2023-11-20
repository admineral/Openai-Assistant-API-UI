// CreateContent.tsx
import React from 'react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

interface CreateContentProps {
  messages: Message[];
}

const CreateContent: React.FC<CreateContentProps> = ({ messages }) => (
  <div>
    <h2 className="text-lg font-semibold mb-2">GPT Builder</h2>
    {messages.length === 0 && (
      <p className="text-gray-400">
        Hi! I'll help you build a new GPT. You can say something like, "make a creative who helps generate visuals for new products" or "make a software engineer who helps format my code."
      </p>
    )}
    <p className="text-gray-400 mt-4">What would you like to make?</p>
    {/* Include other UI elements as needed */}
  </div>
);

export default CreateContent;