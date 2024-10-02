import { motion } from 'framer-motion';
import React from 'react';


const HowItWorks = () => {
    return (
        <section className="relative py-12 mx-auto md:py-6 bg-body overflow-hidden lg:py-6">
            <div className="relative container mx-auto px-4">
                <div className="absolute bottom-0 mr-20 w-186 h-186 bg-gradient-to-t from-violet-900 via-darkBlue-900 to-transparent filter blur-4xl justify-between"></div>
                <div className="max-w-md mx-auto lg:max-w-none relative">

                    <motion.div
                        className="text-left mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6">
                            CodeWave Work
                        </h2>
                        <p className="text-xl text-gray-400">.</p>
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
                                <img className="relative rounded-tl-3xl object-cover" src="../images/code3.jpg" alt="" />
                                {/* <img className="relative w-87 h-87 rounded-tl-3xl object-cover" src="../images/technology.jpg" alt="" /> */}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="max-w-lg">
                                <h3 className="font-heading text-textColor text-4xl lg:text-5xl font-semibold relative">01. Web Development
                                    <span className="absolute left-0 -bottom-7 w-3/4 h-1 bg-orange-600"></span>
                                </h3>
                                <div className="my-6 h-1 w-full bg-white bg-opacity-20"></div>
                                <p className="text-xl text-textColor tracking-tight">
                                    User-friendly designs allow for quick setup, and our dedicated support team is ready to assist you every step of the way.
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
                                <h3 className="font-heading text-textColor text-4xl lg:text-5xl font-semibold relative">02. DevOpes
                                    <span className="absolute left-0 -bottom-7 w-3/4 h-1 bg-orange-600"></span>
                                </h3>
                                <div className="my-6 h-1 w-full bg-white bg-opacity-20"></div>
                                <p className="text-xl text-textColor tracking-tight">
                                    For providing recommendations for the best cloud serveces.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="relative flex max-w-md pt-12 lg:pt-20 pl-12 lg:pl-20 items-end justify-end rounded-3xl overflow-hidden">
                                <img className="relative rounded-tl-3xl object-cover" src="../images/laptop.jpg" alt="" />   
                                {/* <img className="relative w-87 h-87 rounded-tl-3xl object-cover" src="../images/laptop3.jpg" alt="" /> */}
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
                            <img className="relative rounded-tl-3xl object-cover" src="../images/network.jpg" alt="" /> 
                                {/* <img className="relative w-87 h-87 rounded-tl-3xl object-cover" src="../images/laptop2.jpg" alt="" /> */}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="max-w-lg">
                                <h3 className="font-heading text-4xl text-textColor lg:text-5xl font-semibold relative">03. Machine Learning 
                                    <span className="absolute left-0 -bottom-7 w-3/4 h-1 bg-orange-600"></span>
                                </h3>
                                <div className="my-6 h-1 w-full bg-white bg-opacity-20"></div>
                                <p className="text-xl text-textColor tracking-tight">
                                    Make your website more powerfull using ai integration.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    );
};

export default HowItWorks;
