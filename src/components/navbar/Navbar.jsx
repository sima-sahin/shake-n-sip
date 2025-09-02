import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import LanguageDropdown from './LanguageDropdown';
import CategoriesDropdown from './CategoriesDropdown';

const Navbar = () => {

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-14 py-3 border-b border-[#E17C55]">
      {/* LEFT */}
      <div>
        <Logo />
      </div>

      {/* MIDDLE */}
      <div className="flex-1">
        <SearchBar />
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-center md:gap-4">
        <CategoriesDropdown />
        <LanguageDropdown />
      </div>
    </nav>
  )
}

export default Navbar;
