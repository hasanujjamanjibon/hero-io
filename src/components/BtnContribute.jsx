import { RiGithubFill } from '@remixicon/react';
import { Link } from 'react-router';

const BtnContribute = () => {
  return (
    <Link
      to='https://github.com/hasanujjamanjibon'
      target='_blank'
      className='text-white bg-linear-to-br from-purple-900 via-purple-800 to-purple-700 hover:bg-linear-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center  flex items-center gap-1 cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-300 w-fit'
    >
      <RiGithubFill color='#ffffff' />
      Contribute
    </Link>
  );
};

export default BtnContribute;
