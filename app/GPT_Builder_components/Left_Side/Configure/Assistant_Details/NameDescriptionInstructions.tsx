// NameDescriptionInstructions.tsx
import React from 'react';
import { Input } from "@/components/ui/input";

const NameDescriptionInstructions = () => (
  <div className="bg-gray-800 p-7 rounded-lg -ml-4 mt-2">
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="name">Name</label>
      <Input className="bg-gray-700 border border-gray-600 text-white w-full px-4 py-3 rounded" id="name" placeholder="Name your GPT" />
    </div>
    <div className="-mb-6"> {/* Adjust the margin bottom here */}
      <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="instructions">Instructions</label>
      <textarea className="bg-gray-700 border border-gray-600 text-white w-full px-4 py-3 rounded h-36" id="instructions" placeholder="What does this GPT do? How does it behave? What should it avoid doing?"></textarea>
    </div>
  </div>
);

export default NameDescriptionInstructions;