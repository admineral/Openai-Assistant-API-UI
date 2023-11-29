import React from 'react';
import { Input } from "@/components/ui/input"; // Importing Input component from ui library
import { Button } from "@/components/ui/button"; // Importing Button component from ui library

// MessageInput component which accepts a placeholder as a prop
const MessageInput = ({ placeholder }: { placeholder: string }) => { 

  return (
    <div className="flex items-center">
      <Input
        // Styling the input field
        className="w-full bg-gray-700 border border-gray-600 p-2 rounded-r focus:outline-none focus:border-blue-500"
        placeholder={placeholder} // Placeholder text for the input field
      />
      <Button variant="secondary" className="ml-2 rounded">
        Send
      </Button>
    </div>
  );
};

export default MessageInput; // Exporting the MessageInput component