 import { NavLink } from 'react-router';
import DropZetLogo from '../dropZetLogo';
import '../Footer/Footer.css'
 import { FaFacebook, FaGooglePlus, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {

   return (
  <footer className="bg-[#e50f0f] text-white pt-1 font-sans rounded-xl ">
    <div className='footer-bg py-8 rounded-t-xl'>
    
{/* Middle Row: Logo + Links */}
  <div className="mt-10 grid md:grid-cols-4 gap-8 ">
    {/* Branding Section */}
    <div className='footer-glow left-animate'>
      <DropZetLogo />
      
    </div>

    {/* Services */}
    <div className=''>
    
      <ul className="space-y-2 text-sm footer-animate md:text-left text-center">
         <li>
  <NavLink to="/" className={({ isActive }) =>
     isActive ? "text-orange-500 font-bold" : "hover:text-orange-500" }>
    HOME
  </NavLink>
</li>

<li>
  <NavLink  to="/about" className={({ isActive }) => 
    isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"}>
    ABOUT
  </NavLink>
</li>

<li>
  <NavLink to="/tracking" className={({ isActive }) => 
   isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"}>
    TRACKING
  </NavLink>
</li>

<li>
  <NavLink to="/pricing" className={({ isActive }) => 
  isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"
  }
  >
    PRICING
  </NavLink>
</li>


      </ul>
    </div>

    {/* Company */}
    <div>
     <ul className="space-y-2 text-sm footer-animate  md:text-left text-center">
       <li><NavLink to="/contact"  className={({ isActive }) => 
     isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"}>
    CONTACT
  </NavLink>
</li>

<li>
  <NavLink to="/blog"  className={({ isActive }) => 
  isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"
    }>
    BLOG
  </NavLink>
</li>

<li>
  <NavLink to="/blog"  className={({ isActive }) => 
  isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"
    }>
   SUPPORT
  </NavLink>
</li>

<li>
  <NavLink  to="/pages" 
    className={({ isActive }) => 
      isActive ? "text-orange-500 font-bold" : "hover:text-orange-500"}>
    PAGES
  </NavLink>
</li>
      </ul>
    </div>

    
   <div className="footer-section text-center md:text-left px-4 ">
  <h3 className="text-lg font-semibold text-white">GET IN TOUCH</h3>

  {/* Social Icons */}
  <div className="social-icons flex justify-center md:justify-start gap-6 my-4">
    <FaFacebook size={26} className="text-white hover:text-orange-500" />
    <FaTwitter size={26} className="text-white hover:text-orange-500" />
    <FaGooglePlus size={26} className="text-white hover:text-orange-500" />
    <FaLinkedin size={26} className="text-white hover:text-orange-500" />
  </div>

  {/* Payment Icons */}
  <div className="payment-icons flex flex-wrap justify-center md:justify-start gap-4 mt-2">
    {/* PayPal */}
    <svg width="85" height="32" viewBox="0 0 96 28" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PayPal">
      <rect width="96" height="28" rx="4" fill="#013087" />
      <text x="10" y="19" fontFamily="Segoe UI, Arial, sans-serif" fontSize="14" fill="#fff">PayPal</text>
    </svg>

    {/* VISA */}
    <svg width="85" height="32" viewBox="0 0 96 28" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="VISA">
      <rect width="96" height="28" rx="4" fill="#1A1F71" />
      <text x="12" y="19" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="700" fontSize="14" fill="#fff">VISA</text>
    </svg>
  </div>
</div>

  </div>

  </div>
  
   <div className='bg-black text-center text-xs p-8 rounded-b-xl'>
      Drop-Zet © 2025. All Rights Reserved | 
      <a href="#" className="ml-2 hover:text-orange-300">Terms</a> | 
      <a href="#" className="ml-2 hover:text-orange-300">Privacy</a>
    </div>
</footer>
    );
};

export default Footer;