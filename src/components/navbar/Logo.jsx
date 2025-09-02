import React, { useState, useEffect } from 'react';
import logoBig from "../../assets/logos/shakensip.jpg";
import logoSmall from "../../assets/logos/shakensip-logo.jpg";
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  // Screen width listener
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 640px (sm breakpoint)
  const logo = width < 640 ? logoSmall : logoBig;

  return (
    <img 
      src={logo} 
      alt="shake-n-sip" 
      className="w-[45px] sm:w-[160px] md:w-[190px] lg:w-[220px] rounded-md cursor-pointer"
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;