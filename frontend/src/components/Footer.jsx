// About.js
import React from 'react';

const Footer = () => {
  return (
     <footer class="py-12 bg-black">
     <div class="container mx-auto px-4">
         <div class="flex flex-wrap -mx-4">
 
             <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                 <h4 class="text-xl text-white font-bold mb-4 relative">
                     Codewave
                     <span class="absolute left-0 bottom-0 w-1/4 h-1 bg-orange-600"></span>
                 </h4>
                 <p class="text-gray-400 text-sm">
                     Empowering businesses with cutting-edge software solutions tailored to their needs.
                 </p>
             </div>
 
             <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                 <h4 class="text-white text-xl font-bold mb-4 relative">
                 Quick Links
                     <span class="absolute left-0 bottom-0 w-1/4 h-1 bg-orange-600"></span>
                 </h4>
                 <ul>
                     <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Home</a></li>
                     <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Services</a></li>
                     <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">About Us</a></li>
                     <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Contact</a></li>
                 </ul>
             </div>
 
             <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                 <h4 class="text-white text-xl font-bold mb-4 relative">
                     Services
                     <span class="absolute left-0 bottom-0 w-1/4 h-1 bg-orange-600"></span>
                 </h4>
                 <ul>
                     <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Web Development</a></li>
                     <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Mobile Apps</a></li>
                     <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">AI Solutions</a></li>
                     <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Cloud Services</a></li>
                 </ul>
             </div>
             <div class="w-full md:w-1/4 px-4">
                 <h4 class="text-white text-xl font-bold mb-4 relative">
                     Contact Us
                     <span class="absolute left-0 bottom-0 w-1/4 h-1 bg-orange-600"></span>
                 </h4>
                 <p class="text-gray-400 mb-2">Email: info@codewave.com</p>
                 <p class="text-gray-400 mb-2">Phone: +1 (123) 456-7890</p>
                 <p class="text-gray-400">Address: 123 Codewave St., Tech City, USA</p>
             </div>
         </div>
         <div class="mt-8 flex justify-center space-x-6">
         </div>
         <div class="mt-8 text-center text-gray-600 text-sm">
             <p>&copy; 2024 Codewave. All rights reserved.</p>
         </div>
     </div>
 </footer>
  );
};

export default Footer;