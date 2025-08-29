import React from 'react';
import logo from '../../assets/logos/logo.png';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className="w-full border-t border-[#DC8158] bg-[#EEDFD7] mt-20">
            <div className="w-full mx-auto px-6 md:px-12 lg:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* LOGO - INTRODUCTION */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src={logo}
                        alt="Cocktail Logo"
                        className="w-50 md:w-40 h-auto mb-4"
                        onClick={() => navigate("/")}
                    />
                    <p className="text-sm leading-6">
                        Discover the art of cocktail making with curated recipes,
                        expert tips, and endless inspiration. Shake, stir, and savor your perfect drink!
                    </p>
                </div>

                {/* MENU LINKS */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><NavLink to="/" className="hover:text-[#3DA7AF] transition">Home</NavLink></li>
                        <li><NavLink to="/" className="hover:text-[#3DA7AF] transition">Cocktails</NavLink></li>
                        <li><NavLink to="/" className="hover:text-[#3DA7AF] transition">About Us</NavLink></li>
                        <li><NavLink to="/" className="hover:text-[#3DA7AF] transition">Contact</NavLink></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div className='flex flex-col items-center'>
                    <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                    <p className="text-sm mb-4">Follow us for daily cocktail inspiration!</p>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/" target="_blank" className="text-[#3DA7AF] hover:text-[#DE7D5B] transition text-xl">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/?locale=tr_TR" target="_blank" className="text-[#3DA7AF] hover:text-[#DE7D5B] transition text-xl">
                            <FaFacebookSquare />
                        </a>
                        <a href="https://x.com/?lang=tr" target="_blank" className="text-[#3DA7AF] hover:text-[#DE7D5B] transition text-xl">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>

            </div>

            {/* RIGHTS */}
            <div className="border-t border-[#DC8158] text-center py-4 text-sm">
                © {new Date().getFullYear()} SHAKE'N SIP. All Rights Reserved.
            </div>
        </footer>

    )
}

export default Footer;
