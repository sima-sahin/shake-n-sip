import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import LanguageDropdown from './LanguageDropdown';

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
      <div className="">
        <LanguageDropdown />
      </div>
    </nav>
  )
}

export default Navbar;
