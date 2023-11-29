import React from 'react';
import { Button } from "@/components/ui/button";

const AssistantChat = () => {
  return (
    <>
      <PreviewHeader />
      <PreviewDisplay />
    </>
  );
};

const PreviewHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <span className="text-xl font-semibold text-gray-400">Preview</span>
      <Button className="text-gray-400 hover:text-gray-300">
        Save Icon
      </Button>
    </div>
  );
};

const PreviewDisplay = () => {
  return (
    <div className="flex-grow flex justify-center items-center">
      <div className="p-6 bg-gray-700 rounded-full">
        Test your Assistant
      </div>
    </div>
  );
};

export default AssistantChat;