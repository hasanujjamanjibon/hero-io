import { RiGithubFill } from '@remixicon/react';

const BtnContribute = () => {
  return (
    <button className='text-white bg-linear-to-br from-purple-900 via-purple-800 to-purple-700 hover:bg-linear-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center gap-1 cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-300 '>
      <RiGithubFill color='#ffffff' />
      Contribute
    </button>
  );
};

export default BtnContribute;
