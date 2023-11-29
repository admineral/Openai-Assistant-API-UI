import React, { FC } from 'react';

interface BrowseStoreCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const BrowseStoreCard: FC<BrowseStoreCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-[#1e293b] rounded-lg border border-[#334155] overflow-hidden shadow-lg hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:border-[#64748b] transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <div className="flex flex-col justify-between p-4">
        <div className="flex justify-center mb-4">
          <img src={imageUrl} alt="Assistant Example" className="w-12 h-12 rounded-full" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mb-4">
          {description}
        </p>
        <a href="#" className="text-sm text-center py-2 px-4 border border-[#38bdf8] rounded-lg bg-transparent text-[#38bdf8] no-underline transition-all duration-300 ease-in-out hover:bg-[#38bdf8] hover:text-white">
          View Details
        </a>
      </div>
    </div>
  );
};

export default BrowseStoreCard;