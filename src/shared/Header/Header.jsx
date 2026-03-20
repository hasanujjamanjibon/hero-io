import { useState } from 'react';
import NavList from '../../components/NavList';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';
import BtnContribute from '../../components/BtnContribute';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-white text-white sticky top-0 z-50 shadow-sm'>
      <nav className='max-w-6xl mx-auto w-full  px-4 md:px-8 py-3 '>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <img src='/assets/logo.png' alt='logo' className='w-8 h-8' />
            <h1 className='font-bold text-lg text-purple-700'>HERO.IO</h1>
          </div>

          {/* Navlist Items */}
          <ul className='hidden md:flex items-center gap-6 text-sm text-black'>
            <NavList />
          </ul>
          {/* Contribute Button */}
          <div className='hidden md:block'>
            <BtnContribute />
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden black transition-all duration-300'>
            <button className='cursor-pointer' onClick={() => setOpen(!open)}>
              {open ? (
                <RiCloseLine color='#000' />
              ) : (
                <RiMenuLine color='#000' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className='md:hidden mt-4 space-y-4'>
            <ul className='flex flex-col gap-3 text-sm'>
              <NavList />
            </ul>

            {/* Contribute Button */}
            <BtnContribute className='block' />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
