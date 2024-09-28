import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';


const Top = () => {
    const { ref: headingRef, inView: headingInView } = useInView({
        triggerOnce: true, // Animates only once when it comes into view
        threshold: 0.1,    // Trigger when 10% of the element is in view
      });
  
      const { ref: paragraphRef, inView: paragraphInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    
  
  return (
      <section className=" relative bg-body overflow-hidden bg-background" >
      <div className="relative pt-24 lg:pt-44 pb-40 lg:pb-72">
          <div className="relative z-10 container mx-auto px-4">
              <div className="flex flex-wrap -mx-4 items-center">
              <div className="w-full lg:w-1/2 xl:w-3/5 px-4 mb-32 lg:mb-0">
                  <div className="p-6 mx-auto lg:max-w-none">
                  {/* Heading with conditional animation */}
                  <h1
                      ref={headingRef}
                      className={`font-heading text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 md:text-7xl xl:text-8xl font-semibold leading-none mb-8 transition-transform duration-1000 ${
                      headingInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      } text-textColor`}
                  >
                      INTRODUCING CodeWave AI
                  </h1>

                  {/* Paragraph with fade-in effect */}
                  <p
                      ref={paragraphRef}
                      className={`text-2xl mb-8 transition-opacity duration-1000 ${
                      paragraphInView ? 'opacity-100' : 'opacity-0'
                      } text-textColor`}
                  >
                      <span className="block">Welcome to ChatBotX -</span>
                      <span className="block">Your Intelligent AI Chat Assistant!</span>
                  </p>

                  <Link
                      className="group inline-flex h-14 px-7 items-center justify-center text-base font-medium hover:text-white bg-transparent bg-gradient-to-r from-red-600  to-orange-300 hover:from-orange-600 hover:to-red-600 transition duration-200 rounded-full"
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
  </section>
  );
};

export default Top;
      
      
      
     