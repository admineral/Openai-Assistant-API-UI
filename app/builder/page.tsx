// app/builder/page.tsx
import React from 'react';
import Link from 'next/link';
import LeftPanel from './Left_Side/LeftPanel_Component';
import RightPanel from './Right_Side/RightPanel_Component';

const GPTBuilder = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white font-sans">
      <div className="p-2 bg-gray-700"> {/* Reduced padding to make navigation height smaller */}
        <Link href="/main">
          <button className="p-2 bg-blue-500 text-white rounded flex items-center"> {/* Added flex and items-center to align icon and text */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          </button>
        </Link>
      </div>
      <div className="flex flex-grow">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default GPTBuilder;