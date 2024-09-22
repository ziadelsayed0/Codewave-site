import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// NavBar Appearance 
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 80) {
      navbar.classList.add('bg-black','text-white');
      navbar.classList.remove('bg-transparent', 'text-white');
    } else {
      navbar.classList.add('bg-transparent', 'text-black');
      navbar.classList.remove('bg-black', 'text-black');
    }
  });

function LandingPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
// Custom Arrows
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        onClick={onClick}
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        onClick={onClick}
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
    );
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function to switch the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };




    const { ref: headingRef, inView: headingInView } = useInView({
      triggerOnce: true, // Animates only once when it comes into view
      threshold: 0.1,    // Trigger when 10% of the element is in view
    });

    const { ref: paragraphRef, inView: paragraphInView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
    
    const { ref: section1Ref, inView: section1InView } = useInView({
      triggerOnce: true,
      threshold: 0.1, // Trigger when 10% of the element is in view
    });

  return (
    <div className={` ${isDarkMode ? 'text-white' : 'text-black'}`}  style={{ backgroundColor: ` ${isDarkMode ? '#0A0119' : 'white'}` }} >
        {/*  style={{ backgroundColor: ` ${isDarkMode ? '#0A0119' : 'white'}` }}*/}

        {/* -------- Header Section ---------- */}
        <header id="navbar" class="header-area sticky top-0 z-50 shadow-md  bg-transparent transition duration-300" style={{ backgroundColor: ` ${isDarkMode ? '#0A0119' : 'white'}` }}>
            <div class="container mx-auto px-4">
                <div class="col-12 flex justify-between items-center">
                <nav className="main-nav flex justify-between w-full">
                    <div className="container mx-auto px-4">
                    <div className="relative flex items-center justify-between">
                        <Link className="inline-block" to="/">
                        <img className="w-48 rounded-full" src="../images/3.png" alt="" />
                        </Link>
                        <div className="flex items-center justify-end">
                        <div className="hidden lg:block mr-10">
                            <Link className="inline-flex py-2 px-4 mr-4 items-center justify-center text-sm font-medium uppercase hover:text-orange-500 " to="/login">
                            SIGN IN
                            </Link>
                            <Link className="inline-flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase black hover:text-white bg-orange-500 hover:bg-orange-600 transition duration-200 rounded-full" to="/register">
                            SIGN UP
                            </Link>
                        </div>
                        <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-orange-500`}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 16H29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M3 8H29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M20 24L29 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                    </div>
                </nav>
                <div class="flex flex-col justify-center ml-3">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={`${
                        isDarkMode ? 'hidden' : 'inline-flex'
                        } items-center gap-x-2 py-2 px-3 bg-black/40 rounded-full text-sm text-white hover:bg-black/60 focus:outline-none focus:bg-black/60`}
                        data-hs-theme-click-value="dark"
                    >
                        <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                        Dark
                    </button>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={`${
                        isDarkMode ? 'inline-flex' : 'hidden'
                        } items-center gap-x-2 py-2 px-3 bg-white/40 rounded-full text-sm text-white hover:bg-white/60 focus:outline-none focus:bg-white/60`}
                        data-hs-theme-click-value="light"
                    >
                        <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                        Light
                    </button>
                </div>
                </div>
            </div>
        </header>

        {/* --------------------- Slider Section ----------------------*/}
        <section>
            <div className="relative overflow-hidden cursor-grab w-full h-[600px] bg-cover bg-center" id="top" style={{ backgroundImage: "url('../images/slider2.jpg')" }}>
                <Slider {...sliderSettings}>
                {/* Slide 1 */}
                <div className="relative w-full h-[600px]">
                    <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
                    <div className="text-left text-white max-w-lg mx-auto p-6">
                        <h2 className="text-3xl font-bold mb-4 ">Best One in Town<br />&amp; Crypto <em>Services</em></h2>
                        <p className="text-lg mb-6">When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.</p>
                        <div className="flex space-x-4">
                        <a href="#" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Discover More</a>
                        <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Contact Us</a>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="relative w-full h-[600px]">
                    <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
                    <div className="text-left text-white max-w-lg mx-auto p-6">
                        <h2 className="text-3xl font-bold mb-4">Get <em>ready</em> for your business<br />&amp; upgrade <em>all aspects</em></h2>
                        <p className="text-lg mb-6">Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.</p>
                        <div className="flex space-x-4">
                        <a href="#" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Discover More</a>
                        <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Contact Us</a>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="relative w-full h-[600px]">
                    <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
                    <div className="text-left text-white max-w-lg mx-auto p-6">
                        <h2 className="text-3xl font-bold mb-4"><em>Digital</em> Currency for you <br />&amp; Best <em>Crypto</em> Tips</h2>
                        <p className="text-lg mb-6">You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. It does not ask you anything in return. You have a total freedom to use any template for any purpose.</p>
                        <div className="flex space-x-4">
                        <a href="#" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Discover More</a>
                        <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Contact Us</a>
                        </div>
                    </div>
                    </div>
                </div>
                </Slider>
            </div>
        </section>



        {/* --------------------- The top section ----------------------*/}
        <section className=" relative bg-body overflow-hidden" style={{ backgroundColor: ` ${isDarkMode ? '#0A0119' : 'white'}` }} >
            <div className="relative pt-24 lg:pt-44 pb-40 lg:pb-72">
                <div className="relative z-10 container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/2 xl:w-3/5 px-4 mb-32 lg:mb-0">
                        <div className="max-w-md mx-auto lg:max-w-none">
                        {/* Heading with conditional animation */}
                        <h1
                            ref={headingRef}
                            className={`font-heading text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold leading-none mb-8 transition-transform duration-1000 ${
                            headingInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            } ${isDarkMode ? 'text-white' : 'text-black'}`}
                        >
                            INTRODUCING CodeWave AI
                        </h1>

                        {/* Paragraph with fade-in effect */}
                        <p
                            ref={paragraphRef}
                            className={`text-2xl mb-8 transition-opacity duration-1000 ${
                            paragraphInView ? 'opacity-100' : 'opacity-0'
                            } ${isDarkMode ? 'text-gray-400' : 'text-black'}`}
                        >
                            <span className="block">Welcome to ChatBotX -</span>
                            <span className="block">Your Intelligent AI Chat Assistant!</span>
                        </p>

                        <Link
                            className="group inline-flex h-14 px-7 items-center justify-center text-base font-medium text-black hover:text-white bg-orange-500 hover:bg-orange-600 transition duration-200 rounded-full"
                            to="/try"
                        >
                            <span className="mr-2">TRY IT FOR FREE</span>
                        </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-2/5 px-4">
                        <div className="xl:inline-block relative">
                        {/* Images with spin animation */}
                        <img
                            className="absolute top-0 right-0 -mt-8 mr-12 animate-spinStar"
                            src="casper-assets/headers/blink-sm.png"
                            alt=""
                        />
                        <img
                            className="absolute bottom-0 left-0 lg:-ml-24 xl:-ml-40 animate-spinStar"
                            src="casper-assets/headers/blink-md.png"
                            alt=""
                        />
                        <img
                            className="block px-10 md:px-0 mx-auto lg:mr-0"
                            src="../images/robot.png"
                            alt=""
                        />
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            {/* --------------------- Mobile Nav ----------------------*/}
            {mobileNavOpen && (
            <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
                <div
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="fixed inset-0 bg-violet-600 opacity-20"
                ></div>
                <nav className={`relative flex flex-col justify-start py-7 px-10 w-full h-full ${isDarkMode ? 'bg-black' : 'bg-white'} overflow-y-auto`}>
                <div className="flex items-center">
                    <Link className="inline-block mr-auto" to="/">
                    <img className="h-10" src="casper-assets/logos/casper-logo.svg" alt="" />
                    </Link>
                     {/* Logo Container */}
                    <div className="flex justify-start w-full">
                    <a href="/login" className="flex justify-center">
                        <img src="/images/3.png" alt="Logo" className="w-32 rounded" />
                    </a>
                    </div>

                    <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="#F86E00"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        ></path>
                    </svg>
                    </button>
                </div>

                <div className="py-12">
                    <nav className="mt-10">
                        
                    <a
                        className="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25"
                        href="#"
                    >
                        <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                        ></path>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                        ></path>
                        </svg>
                        
                        <span className="mx-3">
                        <Link className="inline-block text-base font-medium uppercase" to="/featured">
                            FEATURED
                        </Link>
                        </span>
                    </a>
                    <a
                        className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                        href="#"
                    >
                        <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                        ></path>
                        </svg>
                        <span className="mx-3">
                        <Link className="inline-block text-base font-medium uppercase" to="/solutions">
                            SOLUTIONS
                        </Link>
                        </span>
                    </a>
                    <a
                        className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                        href="#"
                    >
                        <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        ></path>
                        </svg>
                        <span className="mx-3">
                        <Link className="inline-block text-base font-medium uppercase" to="/products">
                            PRODUCTS
                        </Link>
                        </span>
                    </a>
                    <a
                        className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                        href="#"
                    >
                        <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                        </svg>
                        <span className="mx-3">
                        <Link className="inline-block text-base font-medium uppercase" to="/articles">
                            ARTICLES
                        </Link>
                        </span>
                    </a>
                    </nav>
                </div>
                <div className="mt-auto">
                <Link
                className="flex py-2 px-4 mb-4 items-center justify-center text-sm font-medium uppercase text-orange-500 hover:text-orange-900"
                to="/login"
                >
                SIGN IN
                </Link>
                <Link
                className="flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-orange-500 hover:bg-orange-600 transition duration-200 rounded-full"
                to="/register"
                >
                SIGN UP
                </Link>
                 </div>
                </nav>
            </div>

            )}
        </section>
        {/* --------------------- How it Works ----------------------*/}
        <section className="relative py-12 md:py-24 lg:py-32 bg-body overflow-hidden">
            <div className="relative container mx-auto px-4">
                <div className="absolute top-0 right-0 w-186 h-186 bg-gradient-to-t from-violet-900 to-darkBlue-900 rounded-full filter blur-4xl"></div>
                <div className="relative max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6">
                    How Does CodeWave Work
                    </h2>
                    <p className="text-xl text-gray-400">Mi turpis turpis in justo pellentesque id nibh praesent.</p>
                </motion.div>

                {/* First Section */}
                <motion.div
                    className="flex flex-wrap items-center -mx-4 mb-16"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="relative flex max-w-md pt-12 lg:pt-20 pl-12 lg:pl-20 items-end justify-end rounded-3xl overflow-hidden">
                        <img className="absolute top-0 left-0 w-full h-full" src="../images/color.png" alt="" />
                        <img className="relative w-87 h-87 rounded-tl-3xl object-cover" src="../images/technology.jpg" alt="" />
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                    <div className="max-w-lg">
                        <h3 className="font-heading text-4xl lg:text-5xl font-semibold">01. Upload</h3>
                        <div className="my-6 h-1 w-full bg-white bg-opacity-20"></div>
                        <p className="text-xl tracking-tight">
                        Our user-friendly interface allows for quick setup, and our dedicated support team is ready to assist you every step of the way.
                        </p>
                    </div>
                    </div>
                </motion.div>

                {/* Second Section */}
                <motion.div
                    className="flex flex-wrap items-center -mx-4 mb-16"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full md:w-1/2 px-4 order-last md:order-first">
                    <div className="max-w-lg">
                        <h3 className="font-heading text-4xl lg:text-5xl font-semibold">02. Auto Generation</h3>
                        <div className="my-6 h-1 w-full bg-white bg-opacity-20"></div>
                        <p className="text-xl tracking-tight">
                        From answering questions to providing recommendations, our AI assistant will engage your visitors effortlessly.
                        </p>
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="relative flex max-w-md pt-12 lg:pt-20 pl-12 lg:pl-20 items-end justify-end rounded-3xl overflow-hidden">
                        <img className="absolute top-0 left-0 w-full h-full" src="../images/color.png" alt="" />
                        <img className="relative w-87 h-87 rounded-tl-3xl object-cover" src="../images/laptop3.jpg" alt="" />
                    </div>
                    </div>
                </motion.div>

                {/* Third Section */}
                <motion.div
                    className="flex flex-wrap items-center -mx-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="relative flex max-w-md pt-12 lg:pt-20 pl-12 lg:pl-20 items-end justify-end rounded-3xl overflow-hidden">
                        <img className="absolute top-0 left-0 w-full h-full" src="../images/color.png" alt="" />
                        <img className="relative w-87 h-87 rounded-tl-3xl object-cover" src="../images/laptop2.jpg" alt="" />
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                    <div className="max-w-lg">
                        <h3 className="font-heading text-4xl lg:text-5xl font-semibold">03. Select & Send</h3>
                        <div className="my-6 h-1 w-full bg-white bg-opacity-20"></div>
                        <p className="text-xl tracking-tight">
                        Our user-friendly interface allows for quick setup, and our dedicated support team is ready to assist you every step of the way.
                        </p>
                    </div>
                    </div>
                </motion.div>
                </div>
            </div>
            </section>

        {/* --------------------- The Services section ----------------------*/}
        <section className="relative py-12 md:py-24 bg-body overflow-hidden">
            <div className="relative container mx-auto px-4">
                <div className="absolute bottom-0 right-0 mr-20 w-186 h-186 bg-gradient-to-t from-violet-900 via-darkBlue-900 to-transparent filter blur-4xl"></div>
                <div className="max-w-md mx-auto lg:max-w-none relative">
                <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6">CodeWave Services</h2>
                <p className="text-xl text-gray-500 tracking-tight mb-16">Mi turpis turpis in justo pellentesque id nibh praesent.</p>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
                    <div className="transition-transform transform hover:scale-105 duration-300">
                        <img className="block mb-6" src="casper-assets/services/circle-icon1.png" alt="" />
                        <h4 className="font-heading text-3xl font-medium">Intelligent Conversations</h4>
                        <div className="h-1 bg-white bg-opacity-10 my-6 rounded-md bg-gray-900"></div>
                        <p className={`max-w-sm text-xl tracking-tight leading-relaxed ${isDarkMode ? 'text-violet-50' : 'text-black'}`}>
                        From answering questions to providing recommendations, our AI assistant will engage your visitors effortlessly.
                        </p>
                    </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
                    <div className="transition-transform transform hover:scale-105 duration-300">
                        <img className="block mb-6" src="casper-assets/services/circle-icon3.png" alt="" />
                        <h4 className="font-heading text-3xl font-medium">Intelligent Conversations</h4>
                        <div className="h-1 bg-white bg-opacity-10 my-6 rounded-md"></div>
                        <p className={`max-w-xs text-xl tracking-tight leading-relaxed ${isDarkMode ? 'text-violet-50' : 'text-black'}`}>
                        By understanding your visitors' needs, our chat assistant creates a unique experience.
                        </p>
                    </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4">
                    <div className="transition-transform transform hover:scale-105 duration-300">
                        <img className="block mb-6" src="casper-assets/services/circle-icon2.png" alt="" />
                        <h4 className="font-heading text-3xl font-medium">Intelligent Conversations</h4>
                        <div className="h-1 bg-white bg-opacity-10 my-6 rounded-md"></div>
                        <p className={`max-w-xs text-xl tracking-tight leading-relaxed ${isDarkMode ? 'text-violet-50' : 'text-black'}`}>
                        Say goodbye to static web pages and hello to an interactive, conversational platform.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        
        {/* --------------------- Intelligent Conversations----------------------*/}
        <section class="relative py-12 md:py-24 bg-body overflow-hidden">
    <img class="absolute bottom-0 right-0" src="casper-assets/features/double-line-circle.svg" alt=""/>
    <div class="relative container mx-auto px-4">
        <div class="absolute bottom-0 left-0 -mb-20 w-160 h-160 bg-gradient-to-t from-purple-700 to-darkBlue-900 rounded-full filter blur-4xl"></div>
        <div class="absolute bottom-0 right-0 -mb-20 w-148 h-148 bg-gradient-to-t from-violet-900 to-darkBlue-900 rounded-full filter blur-4xl"></div>
        <div class="relative">
            <div class="max-w-xl mx-auto mb-16 text-center">
                <h2 class="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6">Intelligent Conversations</h2>
                <p class="text-xl text-gray-400">Casper is powered by state-of-the-art artificial intelligence and ensuring natural and meaningful interactions</p>
            </div>
            <div class="flex flex-wrap -mx-4">
                <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                    <div class={`max-w-md mx-auto h-full p-8 rounded-3xl shadow-box-violet overflow-hidden ${isDarkMode ? 'bg-white' : 'bg-black'} bg-opacity-10 transition-transform transform hover:scale-105`}>
                        <div class="flex mb-12 items-center">
                            <div class="flex-shrink-0 flex mr-4 items-center justify-center w-16 h-16 rounded-full bg-green-500">
                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6799 16.9298L15.7499 20.9998L17.5399 19.2098C17.6441 19.106 17.7241 18.9805 17.7743 18.8422C17.8244 18.7039 17.8434 18.5563 17.8299 18.4098L17.1799 11.2998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M9.36994 4.71L7.99994 6.13M9.36994 17.46C9.4629 17.5537 9.5735 17.6281 9.69536 17.6789C9.81722 17.7297 9.94793 17.7558 10.0799 17.7558C10.212 17.7558 10.3427 17.7297 10.4645 17.6789C10.5864 17.6281 10.697 17.5537 10.7899 17.46L18.6999 9.55C20.1713 8.07754 20.9984 6.08157 20.9999 4C20.9999 3.73478 20.8946 3.48043 20.707 3.29289C20.5195 3.10536 20.2652 3 19.9999 3C17.9184 3.00151 15.9224 3.82867 14.4499 5.3L6.53994 13.21C6.44621 13.303 6.37182 13.4136 6.32105 13.5354C6.27028 13.6573 6.24414 13.788 6.24414 13.92C6.24414 14.052 6.27028 14.1827 6.32105 14.3046C6.37182 14.4264 6.44621 14.537 6.53994 14.63L9.36994 17.46ZM17.8699 16L19.2899 14.59L17.8699 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12.75 6.82022L5.59 6.17022C5.44353 6.15675 5.2959 6.17575 5.15761 6.22588C5.01933 6.27601 4.89381 6.35602 4.79 6.46022L3 8.25022L7.09 12.3402" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                            </div>
                            <div>
                                <h4 class="text-2xl font-medium leading-tight">
                                    <span class="block">Seamless</span>
                                    <span>Integration</span>
                                </h4>
                            </div>
                        </div>
                        <p class={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>Powered by state-of-the-art artificial intelligence, ensuring natural and meaningful</p>
                    </div>
                </div>
                <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                    <div class={`max-w-md mx-auto h-full p-8 rounded-3xl shadow-box-orange overflow-hidden ${isDarkMode ? 'bg-white' : 'bg-black'} bg-opacity-10 transition-transform transform hover:scale-105`}>
                        <div class="flex mb-12 items-center">
                            <div class="flex-shrink-0 flex mr-4 items-center justify-center w-16 h-16 rounded-full bg-yellow-700">
                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3V2C2.44772 2 2 2.44772 2 3H3ZM18.293 14.293L17.3818 13.8809C17.2104 14.2601 17.2916 14.7058 17.5859 15.0001L18.293 14.293ZM21 17L21.7071 17.7071C22.0976 17.3166 22.0976 16.6834 21.7071 16.2929L21 17ZM17 21L16.2929 21.7071C16.6834 22.0976 17.3166 22.0976 17.7071 21.7071L17 21ZM14.293 18.293L15.0001 17.5859C14.7058 17.2916 14.2601 17.2104 13.8809 17.3818L14.293 18.293ZM11 2H3V4H11V2ZM20 11C20 6.02944 15.9706 2 11 2V4C14.866 4 18 7.13401 18 11H20ZM19.2041 14.7051C19.7157 13.5738 20 12.3188 20 11H18C18 12.029 17.7786 13.0036 17.3818 13.8809L19.2041 14.7051ZM17.5859 15.0001L20.2929 17.7071L21.7071 16.2929L19.0001 13.5859L17.5859 15.0001ZM20.2929 16.2929L16.2929 20.2929L17.7071 21.7071L21.7071 17.7071L20.2929 16.2929ZM17.7071 20.2929L15.0001 17.5859L13.5859 19.0001L16.2929 21.7071L17.7071 20.2929ZM11 20C12.3188 20 13.5738 19.7157 14.7051 19.2041L13.8809 17.3818C13.0036 17.7786 12.029 18 11 18V20ZM2 11C2 15.9706 6.02944 20 11 20V18C7.13401 18 4 14.866 4 11H2ZM2 3V11H4V3H2Z" fill="white"></path>
                            <ellipse cx="11" cy="11" rx="2" ry="2" transform="rotate(-180 11 11)" fill="white"></ellipse>
                            <path d="M3 3L11 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                            </div>
                            <div>
                                <h4 class="text-2xl font-medium leading-tight">
                                    <span class="block">Intelligent</span>
                                    <span>Conversations</span>
                                </h4>
                            </div>
                        </div>
                        <p class={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>Whether you're a tech guru or a beginner, you'll have your AI chat assistant up</p>
                    </div>
                </div>
                <div class="w-full lg:w-1/3 px-4">
                    <div class={`max-w-md mx-auto h-full p-8 rounded-3xl shadow-box-green overflow-hidden ${isDarkMode ? 'bg-white' : 'bg-black'} bg-opacity-10 transition-transform transform hover:scale-105`}>
                        <div class="flex mb-12 items-center">
                            <div class="flex-shrink-0 flex mr-4 items-center justify-center w-16 h-16 rounded-full bg-sky-500">
                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9C6 5.68629 8.68629 3 12 3V3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21V21C8.68629 21 6 18.3137 6 15V9Z" stroke="white" stroke-width="2" stroke-linejoin="round"></path>
                            <path d="M12 7L12 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                            </div>
                            <div>
                                <h4 class="text-2xl font-medium leading-tight">
                                    <span class="block">Analytics and</span>
                                    <span>Insights:</span>
                                </h4>
                            </div>
                        </div>
                        <p class={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>Gain valuable insights into your users' preferences, behavior, and frequently asked questions</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


        {/* --------------------- Cards for the team ----------------------*/}
        <section className="testimonials py-14" id="testimonials">
        <div className="max-w-screen-lg mx-auto text-center">
            <div className="text-center mb-8">
            <h4 className="text-3xl font-semibold">Our Team</h4>
            </div>

            <div className="relative">
            <Slider {...settings}>
                {/* Testimonial 1 */}
                <div className={`item w-full max-w-lg ${isDarkMode ? 'bg-white' : 'bg-black'} bg-opacity-10 shadow-lg p-6 rounded-lg mx-auto`}>
                <i className="fa fa-quote-left text-orange-600 text-3xl mb-4"></i>
                <p className="text-lg mb-4">
                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                </p>

                {/* Flexbox container for aligning the text and image */}
                <div className="flex items-center justify-between mt-4">
                    {/* h4 and span on the left */}
                    <div className="text-left">
                    <h4 className="text-xl text-orange-500 font-semibold">Nader Hani</h4>
                    <span className="text-sm">Co-Founder of CodeWave</span>
                    </div>

                    {/* Image on the right */}
                    <div className="right-image">
                    <img
                        src="/images/nader.png"
                        alt="Andrew Garfield"
                        className="w-40 h-40 rounded-xl object-cover"
                    />
                    </div>
                </div>
                </div>

                {/* Testimonial 2 */}
                <div className={`item w-full max-w-lg ${isDarkMode ? 'bg-white' : 'bg-black'}  bg-opacity-10 shadow-lg p-6 rounded-lg mx-auto`}>
                <i className="fa fa-quote-left text-orange-600 text-3xl mb-4"></i>
                <p className="text-lg mb-4">
                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                </p>

                {/* Flexbox container for aligning the text and image */}
                <div className="flex items-center justify-between mt-4">
                    {/* h4 and span on the left */}
                    <div className="text-left">
                    <h4 className="text-xl text-orange-500 font-semibold">Fras Mohamed</h4>
                    <span className="text-sm">Co-Founder of CodeWave</span>
                    </div>

                    {/* Image on the right */}
                    <div className="right-image">
                    <img
                        src="/images/fras.jpg"
                        alt="Andrew Garfield"
                        className="w-40 h-40 rounded-xl object-cover"
                    />
                    </div>
                </div>
                </div>

                {/* Testimonial 3 */}
                <div className={`item w-full max-w-lg ${isDarkMode ? 'bg-white' : 'bg-black'} bg-opacity-10 shadow-lg p-6 rounded-lg mx-auto`}>
                <i className="fa fa-quote-left text-orange-600 text-3xl mb-4"></i>
                <p className="text-lg mb-4">
                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                </p>

                {/* Flexbox container for aligning the text and image */}
                <div className="flex items-center justify-between mt-4">
                    {/* h4 and span on the left */}
                    <div className="text-left">
                    <h4 className="text-xl text-orange-500 font-semibold">Mustafa Esmail</h4>
                    <span className="text-sm">Co-Founder of CodeWave</span>
                    </div>

                    {/* Image on the right */}
                    <div className="right-image">
                    <img
                        src="/images/mustafa.jpg"
                        alt="Andrew Garfield"
                        className="w-40 h-40 rounded-xl object-cover"
                    />
                    </div>
                </div>
                </div>

                {/* Testimonial 4 */}
                <div className={`item w-full max-w-lg ${isDarkMode ? 'bg-white' : 'bg-black'}  bg-opacity-10 shadow-lg p-6 rounded-lg mx-auto`}>
                <i className="fa fa-quote-left text-orange-600 text-3xl mb-4"></i>
                <p className="text-lg mb-4">
                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                </p>

                {/* Flexbox container for aligning the text and image */}
                <div className="flex items-center justify-between mt-4">
                    {/* h4 and span on the left */}
                    <div className="text-left">
                    <h4 className="text-xl text-orange-500 font-semibold">Ziad Elasyed</h4>
                    <span className="text-sm">Co-Founder of CodeWave</span>
                    </div>

                    {/* Image on the right */}
                    <div className="right-image">
                    <img
                        src="/images/ziad.jpg"
                        alt="Andrew Garfield"
                        className="w-40 h-40 rounded-xl object-cover"
                    />
                    </div>
                </div>
                </div>
            </Slider>
            </div>
        </div>
        </section>
        
        {/* --------------------- Footer section ----------------------*/}
        <footer class="py-12">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap -mx-4">

                <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                    <h4 class="text-xl font-bold mb-4">Codewave</h4>
                    <p class={`${isDarkMode ? 'text-gray-400' : 'text-black'} text-sm`}>
                    Empowering businesses with cutting-edge software solutions tailored to their needs.
                    </p>
                </div>

            
                <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                    <h4 class="text-xl font-bold mb-4">Quick Links</h4>
                    <ul>
                    <li class="mb-2"><a href="#" class={`text-gray-400 ${isDarkMode ?'hover:text-white' :'hover:text-black'}`}>Home</a></li>
                    <li class="mb-2"><a href="#" class={`text-gray-400 ${isDarkMode ?'hover:text-white' :'hover:text-black'}`}>Services</a></li>
                    <li class="mb-2"><a href="#" class={`text-gray-400 ${isDarkMode ?'hover:text-white' :'hover:text-black'}`}>About Us</a></li>
                    <li class="mb-2"><a href="#" class={`text-gray-400 ${isDarkMode ?'hover:text-white' :'hover:text-black'}`}>Contact</a></li>
                    </ul>
                </div>


                <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                    <h4 class=" text-xl font-bold mb-4">Services</h4>
                    <ul>
                    <li class="mb-2"><a href="#" class={`text-gray-400 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>Web Development</a></li>
                    <li class="mb-2"><a href="#" class={`text-gray-400 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>Mobile Apps</a></li>
                    <li class="mb-2"><a href="#" class={`text-gray-400 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>AI Solutions</a></li>
                    <li class="mb-2"><a href="#" class={`text-gray-400 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>Cloud Services</a></li>
                    </ul>
                </div>

                
                <div class="w-full md:w-1/4 px-4">
                    <h4 class=" text-xl font-bold mb-4">Contact Us</h4>
                    <p class="text-gray-400 mb-2">Email: info@codewave.com</p>
                    <p class="text-gray-400 mb-2">Phone: +1 (123) 456-7890</p>
                    <p class="text-gray-400">Address: 123 Codewave St., Tech City, USA</p>
                </div>
                </div>


                <div class="mt-8 flex justify-center space-x-6">
                <a href="#" class={`text-gray-400 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg> 
                </a>
                <a href="#" class={`text-gray-400 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg> 
                </a>
                <a href="#" class={`text-gray-400 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}/>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
                <a href="#" class={`text-gray-400 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg> 
                </a>
                </div>

                
                <div class="mt-8 text-center text-gray-500 text-sm">
                <p>&copy; 2024 Codewave. All rights reserved.</p>
                </div>
            </div>
        </footer>
</div>
);
}

export default LandingPage;