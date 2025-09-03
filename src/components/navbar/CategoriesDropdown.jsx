import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import categories from '../../data/categories';
import { Link } from 'react-router-dom';
import slugify from "../../utils/slugify.js";

const CategoriesDropdown = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggle = () => setIsOpen(prev => !prev);
    const handleClose = () => setIsOpen(false);

    // Outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                tabIndex={0}
                role="button"
                onClick={handleToggle}
                className="btn m-1 bg-transparent border-none shadow-none text-[#7B3306] flex items-center gap-2 px-3 py-2 rounded-lg transition"
            >
                <BiCategory className='md:hidden text-lg sm:text-xl' />
                <span className="hidden md:inline text-base hover:underline active:underline">Categories</span>
                <FaChevronDown className="text-xs sm:text-sm -ml-1 md:ml-0" />
            </div>

            {isOpen && (
                <ul
                    tabIndex={0}
                    className="absolute right-0 mt-2 menu shadow bg-[#FFF9F1] text-[#7B3306] rounded-lg w-45 text-sm space-y-1 z-50"
                >
                    {categories.map((value) => (
                        <Link
                            key={value}
                            to={`/category/${slugify(value)}`}
                            onClick={handleClose} // Close modal
                            className='hover:bg-[#EEDFD7] p-2 rounded-lg block'
                        >
                            {value}
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CategoriesDropdown;
