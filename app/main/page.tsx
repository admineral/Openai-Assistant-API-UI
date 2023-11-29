import React from 'react';
import MyGPTCard from './components/MyGPTCard'; 
import BrowseStoreCard from './components/BrowseStoreCard';

const MainPage = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-[#1A1A2E]">
      <h1 className="text-4xl font-bold mb-10 text-white">
        My GPTs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MyGPTCard />
        
        {/* Repeat MyGPTCard as needed */}
      </div>

      {/* "Browse the Store" Section */}
      <h2 className="text-4xl font-bold mt-16 mb-10 text-white">
        Browse the Store
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <BrowseStoreCard 
          title="Assistant Example 1"
          description="Description for Assistant 1"
          imageUrl="placeholder_link" // Replace with actual image URL
        />
        
        {/* Repeat BrowseStoreCard for other items */}
        {/* <BrowseStoreCard ... />
           <BrowseStoreCard ... />
           ... */}
      </div>
    </div>
  );
};

export default MainPage;
