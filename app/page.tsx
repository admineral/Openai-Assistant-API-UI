// app/page.tsx
import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <Link href="/main">
        <button className="mb-4 inline-block px-5 py-3 rounded-lg shadow-lg bg-blue-500 text-white text-lg font-bold">Show Main Page</button>
      </Link>
      <Link href="/builder">
        <button className="inline-block px-5 py-3 rounded-lg shadow-lg bg-green-500 text-white text-lg font-bold">Show Builder Page</button>
      </Link>
    </div>
  );
};

export default Page;