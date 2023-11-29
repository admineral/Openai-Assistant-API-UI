
// app/main/components/MyGPTCard.tsx
import React from 'react';
import Link from 'next/link';

const MyGPTCard = () => {
  // Replace 'placeholder_link' with actual image URL when using the component
  const imageSrc = 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/add-circle-blue-512.png';

  return (
    <Link href="/builder">
      <div className="bg-black rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <div className="flex items-center justify-between p-6 bg-white bg-opacity-10">
          <div className="flex items-center">
            <div className="p-0 m-0 mr-5">
              <img src={imageSrc} alt="GPT Icon" height="60" width="60"/>
            </div>
            <span className="text-xl font-semibold text-white">
              Create a GPT
            </span>
          </div>
          <span className="bg-blue-600 text-white py-1 px-3 rounded-full text-sm font-medium uppercase">
            Beta
          </span>
        </div>
        <div className="p-6 text-white">
          Customize a version of ChatGPT for a specific purpose
        </div>
        <div className="flex items-center justify-between p-4 bg-white bg-opacity-5">
          <button className="bg-transparent border-none text-white">
            <i className="fas fa-edit"></i>
          </button>
          <button className="bg-transparent border-none text-white">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MyGPTCard;