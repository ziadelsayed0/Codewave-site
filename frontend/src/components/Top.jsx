import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


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
                                    className={`font-heading text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 md:text-7xl xl:text-8xl font-semibold leading-none mb-8 transition-transform duration-1000 ${headingInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                        } text-textColor`}
                                >
                                    INTRODUCING CodeWave Tech
                                </h1>

                                {/* Paragraph with fade-in effect */}
                                <p
                                    ref={paragraphRef}
                                    className={`text-2xl mb-8 transition-opacity duration-1000 ${paragraphInView ? 'opacity-100' : 'opacity-0'
                                        } text-textColor`}
                                >
                                    <span className="block">Welcome to CodeWave </span>
                                    <span className="block">Your Intelligent Website Creator!</span>
                                </p>

                                <Link
                                    className="group inline-flex h-14 px-7 items-center justify-center text-base font-medium hover:text-white bg-transparent bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-600 hover:to-orange-500 transition duration-200 rounded-full"
                                    to="/try"
                                >
                                    <span className="mr-2">Learn More</span>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 xl:w-2/5 px-4">
                            <motion.div
                                className="xl:inline-block relative overflow-hidden" // Use overflow-hidden to create the sliding effect
                                initial={{ opacity: 0, x: 200 }} // Image starts off the screen to the left
                                whileInView={{ opacity: 1, x: 0 }} // Image slides in from left to right
                                transition={{ duration: 1.5, ease: 'easeOut' }} // Controls animation speed and easing
                                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of image is visible
                            >
                                <img
                                    className="block px-10 md:px-0 mx-auto lg:mr-0"
                                    src="../images/robot.png"
                                    alt="Sliding Animated Robot"
                                />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Top;



