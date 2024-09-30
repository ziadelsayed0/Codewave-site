// About.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto">
                {/* Footer Top */}
                <div className="flex flex-wrap justify-between items-center mb-10">
                    <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                        <a href="#">
                            <img src="../images/5.png" alt="Logo" className="w-20" />
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 text-right">
                        <div className="space-x-4">
                            <a href="#" className="text-blue-500 hover:text-blue-400"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-blue-500 hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="text-pink-300 hover:text-blue-400"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-red-500 hover:text-blue-400"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>

                {/* Footer Options */}
                <div className="flex flex-wrap justify-between">
                    {/* About Us */}
                    <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h4 class="text-xl text-white font-bold mb-4 pb-2 relative">
                            Codewave
                            <span class="absolute left-0 bottom-0 w-1/4 h-1 bg-orange-600"></span>
                        </h4>
                        <p class="text-gray-400 text-sm">
                            Empowering businesses with cutting-edge software solutions tailored to their needs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full lg:w-1/6 mb-8 lg:mb-0">
                        <h5 className="font-bold text-lg mb-4 pb-2 relative">Quick Links
                        <span class="absolute left-0 bottom-0 w-1/4 h-1 bg-orange-600"></span>
                        </h5>
                        <ul className="space-y-2">
                            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Home</a></li>
                            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Services</a></li>
                            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">About Us</a></li>
                            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* Our Work */}
                    <div className="w-full lg:w-1/6 mb-8 lg:mb-0">
                        <h5 className="font-bold text-lg mb-4 pb-2 relative">Services
                        <span class="absolute left-0 bottom-0 w-1/4 h-1 bg-orange-600"></span>
                        </h5>
                        <ul className="space-y-2">
                            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Web Development</a></li>
                            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Mobile Apps</a></li>
                            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">AI Solutions</a></li>
                            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-orange-500">Cloud Services</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="w-full lg:w-1/3">
                        <h5 className="font-bold text-lg mb-4 pb-2 relative">Contact Us
                        <span class="absolute left-0 bottom-0 w-1/5 h-1 bg-orange-600"></span>
                        </h5>
                        <p class="text-gray-400 mb-2">Email: info@codewave.com</p>
                        <p class="text-gray-400 mb-2">Phone: +1 (123) 456-7890</p>
                        <p class="text-gray-400">Address: 123 Codewave St., Tech City, USA</p>
                        <form action="#" className="flex pt-10">
                            <input type="text" placeholder="Email" className="p-2 rounded-l-lg w-full focus:outline-none" />
                            <button type="submit" className="hover:bg-blue-700 bg-blue-500 p-2 rounded-r-lg text-black">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Copyright */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                    <p className="text-sm">
                        Copyright &copy; 2024 Codewave. All rights reserved. | This website is made with
                        <i className="far fa-heart text-red-500 mx-1" aria-hidden="true"></i>
 by
                        <a href="#" className="text-blue-400 hover:text-blue-500"> codewave team</a>
                    </p>
                </div>
            </div>
        </footer>



    );
};

export default Footer;