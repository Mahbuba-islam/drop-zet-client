 import DropZetLogo from '../dropZetLogo';
import '../Footer/Footer.css'
 
const Footer = () => {

   return (
  <footer className="bg-[#e50f0f] text-white pt-1 font-sans ">
    <div className='footer-bg py-8 '>
     {/* Top Row: Call to Action Banner */}
  {/* <div className="bg-orange-600 text-black px-6 py-4 rounded-lg flex items-center justify-between shadow-md">
    <span className="font-bold">CALL US TO ORDER DELIVERY</span>
    <span className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5h2l3 7-1.5 2.5a11.05 11.05 0 005.5 5.5L14 16l7 3v-2a2 2 0 00-2-2h-3l-4-4V5a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
      </svg>
      <span>123-456-7890</span>
    </span>
  </div>
   
  */}

  {/* Middle Row: Logo + Links */}
  <div className="mt-10 grid md:grid-cols-4 gap-8 ">
    {/* Branding Section */}
    <div className='footer-glow left-animate'>
      <DropZetLogo />
      
    </div>

    {/* Services */}
    <div className=''>
      <h6 className="footer-title text-orange-400 mb-3 footer-animate">Services</h6>
      <ul className="space-y-2 text-sm footer-animate">
        <li><a className="hover:text-orange-300 ">Branding</a></li>
        <li><a className="hover:text-orange-300 ">Design</a></li>
        <li><a className="hover:text-orange-300 ">Marketing</a></li>
        <li><a className="hover:text-orange-300 ">Advertisement</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h6 className="footer-title text-orange-400 mb-3 footer-animate">Company</h6>
      <ul className="space-y-2 text-sm footer-animate">
        <li><a className="hover:text-orange-300">About us</a></li>
        <li><a className="hover:text-orange-300">Contact</a></li>
        <li><a className="hover:text-orange-300">Jobs</a></li>
        <li><a className="hover:text-orange-300">Press kit</a></li>
      </ul>
    </div>

    {/* Customer Care */}
    <div>
      <h6 className="footer-title text-orange-400 mb-3 footer-animate">Customer Care</h6>
      <ul className="space-y-2 text-sm footer-animate">
        <li><a className="hover:text-orange-300">Help Center</a></li>
        <li><a className="hover:text-orange-300">Track Order</a></li>
        <li><a className="hover:text-orange-300">Returns</a></li>
        <li><a className="hover:text-orange-300">Privacy Policy</a></li>
      </ul>
    </div>
  </div>

  
   
  </div>
  
   <div className='bg-black text-center text-xs p-8'>
      Drop-Zet © 2025. All Rights Reserved | 
      <a href="#" className="ml-2 hover:text-orange-300">Terms</a> | 
      <a href="#" className="ml-2 hover:text-orange-300">Privacy</a>
    </div>
</footer>
    );
};

export default Footer;