'use client';

import { useState } from 'react';

import Logo from './Logo';
import NavMenu from './NavMenu';
import Icons from './Icons';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from '@/app/components/Header/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-6 sm:px-10 lg:px-16 shadow-sm">
      <div className="container mx-auto flex items-center justify-between flex items-center space-x-4">
        <Logo />
        <NavMenu />
        <div className="flex items-center space-x-4">
          <Icons />
          <MobileMenuButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
};

export default Header;
