import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    autoplaySpeed: 3000,
  };

  return (
    <div class="bg-black">
        <header class="header-area sticky top-0 z-50 shadow-md">
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
                        <Link className="inline-flex py-2 px-4 mr-4 items-center justify-center text-sm font-medium uppercase text-white hover:text-orange-500" to="/login">
                            SIGN IN
                        </Link>
                        <Link className="inline-flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-orange-500 hover:bg-orange-600 transition duration-200 rounded-full" to="/register">
                            SIGN UP
                        </Link>
                        </div>
                        <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="text-white hover:text-orange-500">
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
            </div>
        </div>
        </header>
    


        {/* The top section */}
        <section className="relative bg-body overflow-hidden">
            <div className="relative pt-24 lg:pt-44 pb-40 lg:pb-72">
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-wrap -mx-4 items-center">
                <div className="w-full lg:w-1/2 xl:w-3/5 px-4 mb-32 lg:mb-0">
                    <div className="max-w-md mx-auto lg:max-w-none">
                    <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl xl:text-8xl text-white font-semibold leading-none mb-8">
                        INTRODUCING CodeWave AI
                    </h1>
                    <p className="text-2xl text-gray-400 mb-8">
                        <span className="block">Welcome to ChatBotX -</span>
                        <span className="block">Your Intelligent AI Chat Assistant!</span>
                    </p>
                    <Link className="group inline-flex h-14 px-7 items-center justify-center text-base font-medium text-black hover:text-white bg-orange-500 hover:bg-orange-600 transition duration-200 rounded-full" to="/try">
                        <span className="mr-2">TRY IT FOR FREE</span>
                    </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 xl:w-2/5 px-4">
                    <div className="xl:inline-block relative">
                    <img className="absolute top-0 right-0 -mt-8 mr-12 animate-spinStar" src="casper-assets/headers/blink-sm.png" alt="" />
                    <img className="absolute bottom-0 left-0 lg:-ml-24 xl:-ml-40 animate-spinStar" src="casper-assets/headers/blink-md.png" alt="" />
                    <img className="block px-10 md:px-0 mx-auto lg:mr-0" src="../images/robot.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Mobile Nav */}
            {mobileNavOpen && (
            <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
                <div onClick={() => setMobileNavOpen(!mobileNavOpen)} className="fixed inset-0 bg-violet-600 opacity-20"></div>
                <nav className="relative flex flex-col py-7 px-10 w-full h-full bg-black overflow-y-auto">
                <div className="flex mb-auto items-center">
                    <Link className="inline-block mr-auto" to="/">
                    <img className="h-10" src="casper-assets/logos/casper-logo.svg" alt="" />
                    </Link>
                    <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="#F86E00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    </button>
                </div>
                <div className="py-12 mb-auto">
                    <ul className="flex-col">
                    <li className="mb-6">
                        <Link className="inline-block text-base text-white font-medium uppercase" to="/featured">
                        FEATURED
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link className="inline-block text-base text-white font-medium uppercase" to="/solutions">
                        SOLUTIONS
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link className="inline-block text-base text-white font-medium uppercase" to="/products">
                        PRODUCTS
                        </Link>
                    </li>
                    <li>
                        <Link className="inline-block text-base text-white font-medium uppercase" to="/articles">
                        ARTICLES
                        </Link>
                    </li>
                    </ul>
                </div>
                <div>
                    <Link className="flex py-2 px-4 mb-4 items-center justify-center text-sm font-medium uppercase text-orange-500 hover:text-orange-900" to="/login">
                    SIGN IN
                    </Link>
                    <Link className="flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-orange-500 hover:bg-orange-600 transition duration-200 rounded-full" to="/register">
                    SIGN UP
                    </Link>
                </div>
                </nav>
            </div>
            )}
        </section>
        {/*How it Works */}
        <section class="relative py-12 md:py-24 lg:py-32 bg-body overflow-hidden ">
            <div class="relative container mx-auto px-4">
                <div class="absolute top-0 right-0 w-186 h-186 bg-gradient-to-t from-violet-900 to-darkBlue-900 rounded-full filter blur-4xl"></div>
                <div class="relative max-w-6xl mx-auto">
                <div class="text-center mb-14">
                    <h2 class="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight mb-6">How Does CodeWave Work</h2>
                    <p class="text-xl text-gray-400">Mi turpis turpis in justo pellentesque id nibh praesent.</p>
                </div>
                <div class="flex flex-wrap items-center -mx-4 mb-16">
                    <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <div class="relative flex max-w-md pt-12 lg:pt-20 pl-12 lg:pl-20 items-end justify-end rounded-3xl overflow-hidden">
                        <img class="absolute top-0 left-0 w-full h-full" src="../images/color.png" alt=""/>
                        <img class="relative w-87 h-87 rounded-tl-3xl object-cover" src="../images/technology.jpg" alt=""/>
                    </div>
                    </div>
                    <div class="w-full md:w-1/2 px-4">
                    <div class="max-w-lg">
                        <h3 class="font-heading text-4xl lg:text-5xl font-semibold text-white">01. Upload</h3>
                        <div class="my-6 h-1 w-full bg-white bg-opacity-20"></div>
                        <p class="text-xl text-white tracking-tight">Our user-friendly interface allows for quick setup, and our dedicated support team is ready to assist you every step of the way.</p>
                    </div>
                    </div>
                </div>
                <div class="flex flex-wrap items-center -mx-4 mb-16">
                    <div class="w-full md:w-1/2 px-4 order-last md:order-first">
                    <div class="max-w-lg">
                        <h3 class="font-heading text-4xl lg:text-5xl font-semibold text-white">02. Auto Generation</h3>
                        <div class="my-6 h-1 w-full bg-white bg-opacity-20"></div>
                        <p class="text-xl text-white tracking-tight">From answering questions to providing recommendations, our AI assistant will engage your visitors effortlessly.</p>
                    </div>
                    </div>
                    <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <div class="relative flex max-w-md pt-12 lg:pt-20 pl-12 lg:pl-20 md:ml-auto items-end justify-end rounded-3xl overflow-hidden">
                        <img class="absolute top-0 left-0 w-full h-full" src="../images/color.png" alt=""/>
                        <img class="relative w-87 h-87 rounded-tl-3xl object-cover" src="../images/laptop3.jpg" alt=""/>
                    </div>
                    </div>
                </div>
                <div class="flex flex-wrap items-center -mx-4">
                    <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <div class="relative flex max-w-md pt-12 lg:pt-20 pl-12 lg:pl-20 items-end justify-end rounded-3xl overflow-hidden">
                        <img class="absolute top-0 left-0 w-full h-full" src="../images/color.png" alt=""/>
                        <img class="relative w-87 h-87 rounded-tl-3xl object-cover" src="../images/laptop2.jpg" alt=""/>
                    </div>
                    </div>
                    <div class="w-full md:w-1/2 px-4">
                    <div class="max-w-lg">
                        <h3 class="font-heading text-4xl lg:text-5xl font-semibold text-white">03. Select & Send</h3>
                        <div class="my-6 h-1 w-full bg-white bg-opacity-20"></div>
                        <p class="text-xl text-white tracking-tight">Our user-friendly interface allows for quick setup, and our dedicated support team is ready to assist you every step of the way.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/*The Services section*/}
        <section class="relative py-12 md:py-24 bg-body overflow-hidden">
            <div class="relative container mx-auto px-4">
                <div class="absolute bottom-0 right-0 mr-20 w-186 h-186 bg-gradient-to-t from-violet-900 via-darkBlue-900 to-transparent filter blur-4xl"></div>
                <div class="max-w-md mx-auto lg:max-w-none relative">
                <h2 class="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight mb-6">CodeWave Services</h2>
                <p class="text-xl text-gray-500 tracking-tight mb-16">Mi turpis turpis in justo pellentesque id nibh praesent.</p>
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
                    <div>
                        <img class="block mb-6" src="casper-assets/services/circle-icon1.png" alt=""/>
                        <h4 class="font-heading text-3xl font-medium text-white">Intelligent Conersations</h4>
                        <div class="h-1 bg-white bg-opacity-10 my-6 rounded-md bg-gray-900"></div>
                        <p class="max-w-sm text-xl tracking-tight leading-relaxed text-violet-50">From answering questions to providing recommendations, our AI assistant will engage your visitors effortlessly.</p>
                    </div>
                    </div>
                    <div class="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
                    <div>
                        <img class="block mb-6" src="casper-assets/services/circle-icon3.png" alt=""/>
                        <h4 class="font-heading text-3xl font-medium text-white">Intelligent Conersations</h4>
                        <div class="h-1 bg-white bg-opacity-10 my-6 rounded-md"></div>
                        <p class="max-w-xs text-xl tracking-tight leading-relaxed text-violet-50">By understanding your visitors' needs, our chat assistant creates a unique experience</p>
                    </div>
                    </div>
                    <div class="w-full lg:w-1/3 px-4">
                    <div>
                        <img class="block mb-6" src="casper-assets/services/circle-icon2.png" alt=""/>
                        <h4 class="font-heading text-3xl font-medium text-white">Intelligent Conersations</h4>
                        <div class="h-1 bg-white bg-opacity-10 my-6 rounded-md"></div>
                        <p class="max-w-xs text-xl tracking-tight leading-relaxed text-violet-50">Say goodbye to static web pages and hello to an interactive, conversational platform</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/*Intelligent Conversations*/ }
        <section class="relative py-12 md:py-24 bg-body overflow-hidden">
            <img class="absolute bottom-0 right-0" src="casper-assets/features/double-line-circle.svg" alt=""/>
            <div class="relative container mx-auto px-4">
            <div class="absolute bottom-0 left-0 -mb-20 w-160 h-160 bg-gradient-to-t from-purple-700 to-darkBlue-900 rounded-full filter blur-4xl"></div>
            <div class="absolute bottom-0 right-0 -mb-20 w-148 h-148 bg-gradient-to-t from-violet-900 to-darkBlue-900 rounded-full filter blur-4xl"></div>
            <div class="relative">
                <div class="max-w-xl mx-auto mb-16 text-center">
                <h2 class="font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight mb-6">Intelligent Conversations</h2>
                <p class="text-xl text-gray-400">Casper is powered by state-of-the-art artificial intelligence and ensuring natural and meaningful interactions</p>
                </div>
                <div class="flex flex-wrap -mx-4">
                <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                    <div class="max-w-md mx-auto h-full p-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                    <div class="flex mb-12 items-center">
                        <div class="flex-shrink-0 flex mr-4 items-center justify-center w-16 h-16 rounded-full bg-green-500">
                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6799 16.9298L15.7499 20.9998L17.5399 19.2098C17.6441 19.106 17.7241 18.9805 17.7743 18.8422C17.8244 18.7039 17.8434 18.5563 17.8299 18.4098L17.1799 11.2998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M9.36994 4.71L7.99994 6.13M9.36994 17.46C9.4629 17.5537 9.5735 17.6281 9.69536 17.6789C9.81722 17.7297 9.94793 17.7558 10.0799 17.7558C10.212 17.7558 10.3427 17.7297 10.4645 17.6789C10.5864 17.6281 10.697 17.5537 10.7899 17.46L18.6999 9.55C20.1713 8.07754 20.9984 6.08157 20.9999 4C20.9999 3.73478 20.8946 3.48043 20.707 3.29289C20.5195 3.10536 20.2652 3 19.9999 3C17.9184 3.00151 15.9224 3.82867 14.4499 5.3L6.53994 13.21C6.44621 13.303 6.37182 13.4136 6.32105 13.5354C6.27028 13.6573 6.24414 13.788 6.24414 13.92C6.24414 14.052 6.27028 14.1827 6.32105 14.3046C6.37182 14.4264 6.44621 14.537 6.53994 14.63L9.36994 17.46ZM17.8699 16L19.2899 14.59L17.8699 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12.75 6.82022L5.59 6.17022C5.44353 6.15675 5.2959 6.17575 5.15761 6.22588C5.01933 6.27601 4.89381 6.35602 4.79 6.46022L3 8.25022L7.09 12.3402" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        </div>
                        <div>
                        <h4 class="text-2xl font-medium text-white leading-tight">
                            <span class="block">Seamless</span>
                            <span>Integration</span>
                        </h4>
                        </div>
                    </div>
                    <p class="text-xl text-gray-400">Powered by state-of-the-art artificial intelligence, ensuring natural and meaningful</p>
                    </div>
                </div>
                <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                    <div class="max-w-md mx-auto h-full p-8 rounded-3xl shadow-box-orange overflow-hidden bg-white bg-opacity-10">
                    <div class="flex mb-12 items-center">
                        <div class="flex-shrink-0 flex mr-4 items-center justify-center w-16 h-16 rounded-full bg-yellow-700">
                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3V2C2.44772 2 2 2.44772 2 3H3ZM18.293 14.293L17.3818 13.8809C17.2104 14.2601 17.2916 14.7058 17.5859 15.0001L18.293 14.293ZM21 17L21.7071 17.7071C22.0976 17.3166 22.0976 16.6834 21.7071 16.2929L21 17ZM17 21L16.2929 21.7071C16.6834 22.0976 17.3166 22.0976 17.7071 21.7071L17 21ZM14.293 18.293L15.0001 17.5859C14.7058 17.2916 14.2601 17.2104 13.8809 17.3818L14.293 18.293ZM11 2H3V4H11V2ZM20 11C20 6.02944 15.9706 2 11 2V4C14.866 4 18 7.13401 18 11H20ZM19.2041 14.7051C19.7157 13.5738 20 12.3188 20 11H18C18 12.029 17.7786 13.0036 17.3818 13.8809L19.2041 14.7051ZM17.5859 15.0001L20.2929 17.7071L21.7071 16.2929L19.0001 13.5859L17.5859 15.0001ZM20.2929 16.2929L16.2929 20.2929L17.7071 21.7071L21.7071 17.7071L20.2929 16.2929ZM17.7071 20.2929L15.0001 17.5859L13.5859 19.0001L16.2929 21.7071L17.7071 20.2929ZM11 20C12.3188 20 13.5738 19.7157 14.7051 19.2041L13.8809 17.3818C13.0036 17.7786 12.029 18 11 18V20ZM2 11C2 15.9706 6.02944 20 11 20V18C7.13401 18 4 14.866 4 11H2ZM2 3V11H4V3H2Z" fill="white"></path>
                            <ellipse cx="11" cy="11" rx="2" ry="2" transform="rotate(-180 11 11)" fill="white"></ellipse>
                            <path d="M3 3L11 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        </div>
                        <div>
                        <h4 class="text-2xl font-medium text-white leading-tight">
                            <span class="block">Intelligent</span>
                            <span>Conversations</span>
                        </h4>
                        </div>
                    </div>
                    <p class="text-xl text-gray-400">Whether you're a tech guru or a beginner, you'll have your AI chat assistant up</p>
                    </div>
                </div>
                <div class="w-full lg:w-1/3 px-4">
                    <div class="max-w-md mx-auto h-full p-8 rounded-3xl shadow-box-green overflow-hidden bg-white bg-opacity-10">
                    <div class="flex mb-12 items-center">
                        <div class="flex-shrink-0 flex mr-4 items-center justify-center w-16 h-16 rounded-full bg-sky-500">
                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9C6 5.68629 8.68629 3 12 3V3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21V21C8.68629 21 6 18.3137 6 15V9Z" stroke="white" stroke-width="2" stroke-linejoin="round"></path>
                            <path d="M12 7L12 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        </div>
                        <div>
                        <h4 class="text-2xl font-medium text-white leading-tight">
                            <span class="block">Analytics and</span>
                            <span>Insights:</span>
                        </h4>
                        </div>
                    </div>
                    <p class="text-xl text-gray-400">Gain valuable insights into your users' preferences, behavior, and frequently asked questions</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="testimonials py-14" id="testimonials">
        <div className="max-w-screen-lg mx-auto text-center">
            <div className="text-center mb-8">
            <h4 className="text-3xl text-white font-semibold">Our Team</h4>
            </div>

            <div className="relative">
            <Slider {...settings}>
                {/* Testimonial 1 */}
                <div className="item w-full max-w-lg bg-white bg-opacity-10 shadow-lg p-6 rounded-lg mx-auto">
                <i className="fa fa-quote-left text-orange-600 text-3xl mb-4"></i>
                <p className="text-lg text-white mb-4">
                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                </p>

                {/* Flexbox container for aligning the text and image */}
                <div className="flex items-center justify-between mt-4">
                    {/* h4 and span on the left */}
                    <div className="text-left">
                    <h4 className="text-xl text-orange-500 font-semibold">Andrew Garfield</h4>
                    <span className="text-sm text-white">CTO of Mexant</span>
                    </div>

                    {/* Image on the right */}
                    <div className="right-image">
                    <img
                        src="/images/laptop2.jpg"
                        alt="Andrew Garfield"
                        className="w-40 h-40 rounded-xl object-cover"
                    />
                    </div>
                </div>
                </div>

                {/* Testimonial 2 */}
                <div className="item w-full max-w-lg bg-white bg-opacity-10 shadow-lg p-6 rounded-lg mx-auto">
                <i className="fa fa-quote-left text-orange-600 text-3xl mb-4"></i>
                <p className="text-lg text-white mb-4">
                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                </p>

                {/* Flexbox container for aligning the text and image */}
                <div className="flex items-center justify-between mt-4">
                    {/* h4 and span on the left */}
                    <div className="text-left">
                    <h4 className="text-xl text-orange-500 font-semibold">Andrew Garfield</h4>
                    <span className="text-sm text-white">CTO of Mexant</span>
                    </div>

                    {/* Image on the right */}
                    <div className="right-image">
                    <img
                        src="/images/laptop2.jpg"
                        alt="Andrew Garfield"
                        className="w-40 h-40 rounded-xl object-cover"
                    />
                    </div>
                </div>
                </div>

                {/* Testimonial 3 */}
                <div className="item w-full max-w-lg bg-white bg-opacity-10 shadow-lg p-6 rounded-lg mx-auto">
                <i className="fa fa-quote-left text-orange-600 text-3xl mb-4"></i>
                <p className="text-lg text-white mb-4">
                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                </p>

                {/* Flexbox container for aligning the text and image */}
                <div className="flex items-center justify-between mt-4">
                    {/* h4 and span on the left */}
                    <div className="text-left">
                    <h4 className="text-xl text-orange-500 font-semibold">Andrew Garfield</h4>
                    <span className="text-sm text-white">CTO of Mexant</span>
                    </div>

                    {/* Image on the right */}
                    <div className="right-image">
                    <img
                        src="/images/laptop2.jpg"
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
        
        <footer class="py-12">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap -mx-4">

                <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                    <h4 class="text-white text-xl font-bold mb-4">Codewave</h4>
                    <p class="text-gray-400 text-sm">
                    Empowering businesses with cutting-edge software solutions tailored to their needs.
                    </p>
                </div>

            
                <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                    <h4 class="text-white text-xl font-bold mb-4">Quick Links</h4>
                    <ul>
                    <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
                    <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Services</a></li>
                    <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                    <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>


                <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                    <h4 class="text-white text-xl font-bold mb-4">Services</h4>
                    <ul>
                    <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Web Development</a></li>
                    <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Mobile Apps</a></li>
                    <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">AI Solutions</a></li>
                    <li class="mb-2"><a href="#" class="text-gray-400 hover:text-white">Cloud Services</a></li>
                    </ul>
                </div>

                
                <div class="w-full md:w-1/4 px-4">
                    <h4 class="text-white text-xl font-bold mb-4">Contact Us</h4>
                    <p class="text-gray-400 mb-2">Email: info@codewave.com</p>
                    <p class="text-gray-400 mb-2">Phone: +1 (123) 456-7890</p>
                    <p class="text-gray-400">Address: 123 Codewave St., Tech City, USA</p>
                </div>
                </div>


                <div class="mt-8 flex justify-center space-x-6">
                <a href="#" class="text-gray-400 hover:text-white">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg> 
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg> 
                </a>
                <a href="#" class="text-gray-400 hover:text-white"/>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
                <a href="#" class="text-gray-400 hover:text-white">
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