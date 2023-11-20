import React from 'react';
import LeftPanel from './Left_Side/LeftPanel_Component';
import RightPanel from './Right_Side/RightPanel_Component';

const GPTBuilder = () => {
  return (
    <div className="flex h-screen bg-gray-800 text-white font-sans">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default GPTBuilder;
