// MessageInput_Left.tsx
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSend = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page refresh
    if (input.trim()) {
      onSendMessage(input);
      setInput(''); // Clear input after sending
    }
  };

  return (
    <form onSubmit={handleSend} className="flex items-center">
      <Input
        className="w-full bg-gray-700 border border-gray-600 p-2 rounded-r focus:outline-none focus:border-blue-500"
        placeholder="Type your message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" variant="secondary" className="ml-2 rounded" disabled={isLoading}>
        {isLoading ? '...' : 'Send'}
      </Button>
    </form>
  );
};

export default MessageInput;