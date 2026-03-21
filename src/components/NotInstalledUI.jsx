import { RiDropboxFill } from '@remixicon/react';
import { Link } from 'react-router';

export default function NotInstalledUI() {
  return (
    <div className='flex flex-col items-center justify-center h-[70vh] text-center px-4'>
      {/* Icon */}
      <div className='bg-gray-100 p-6 rounded-full'>
        <RiDropboxFill size={120} className='text-5xl text-gray-400' />
      </div>
      {/* Title */}
      <h2 className='mt-6 text-xl font-semibold text-gray-700'>
        No Apps Installed
      </h2>
      {/* Description */}
      <p className='mt-2 text-gray-500 max-w-md'>
        You don’t have any installed apps yet.
      </p>

      {/* Button */}
      <Link
        to='/apps'
        className='mt-5 px-5 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition'
      >
        Browse Apps
      </Link>
    </div>
  );
}
