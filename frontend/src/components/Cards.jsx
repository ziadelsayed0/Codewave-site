import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Cards = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // Mobile view
                settings: {
                    slidesToShow: 1, // Show only 1 slide
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 1024, // Tablet view
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <section>
            <section className="latest py-12">
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-semibold text-textColor">Our Team</h2>
                    </div>

                    <Slider {...settings}>
                        <div className="px-4">
                            <div className="bg-cardbackground p-6 shadow-lg rounded-lg">
                                <i className="fas fa-quote-left text-green-600 text-3xl mb-4"></i>
                                <p className="text-lg text-textColor mb-4">
                                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                                </p>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="text-left">
                                        <h4 className="text-xl text-orange-500 font-semibold">Fras Mohamed</h4>
                                        <span className="text-sm text-textColor ">Co-Founder of CodeWave</span>
                                    </div>
                                    <div className="right-image">
                                        <img
                                            src="/images/fras.jpg"
                                            alt="Fras Mohamed"
                                            className="w-40 h-40 rounded-xl object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add more slides in a similar format */}
                        <div className="px-4">
                            <div className="bg-cardbackground p-6 shadow-lg rounded-lg">
                                <i className="fas fa-quote-left text-green-600  text-3xl mb-4"></i>
                                <p className="text-lg text-textColor mb-4">
                                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                                </p>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="text-left">
                                        <h4 className="text-xl text-orange-500 font-semibold">Nader Hani</h4>
                                        <span className="text-sm text-textColor ">Co-Founder of CodeWave</span>
                                    </div>
                                    <div className="right-image">
                                        <img
                                            src="/images/nader.png"
                                            alt="Nader Hani"
                                            className="w-40 h-40 rounded-xl object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add more slides in a similar format */}
                        <div className="px-4">
                            <div className="bg-cardbackground p-6 shadow-lg rounded-lg">
                                <i className="fas fa-quote-left text-green-600 text-3xl mb-4"></i>
                                <p className="text-lg text-textColor mb-4">
                                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                                </p>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="text-left">
                                        <h4 className="text-xl text-orange-500 font-semibold">Mustafa Esmail</h4>
                                        <span className="text-sm text-textColor ">Co-Founder of CodeWave</span>
                                    </div>
                                    <div className="right-image">
                                        <img
                                            src="/images/mustafa.jpg"
                                            alt="Mustafa Esmail"
                                            className="w-40 h-40 rounded-xl object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add more slides in a similar format */}
                        <div className="px-4">
                            <div className="bg-cardbackground p-6 shadow-lg rounded-lg">
                                <i className="fas fa-quote-left text-green-600  text-3xl mb-4"></i>
                                <p className="text-lg text-textColor mb-4">
                                    “Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”
                                </p>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="text-left">
                                        <h4 className="text-xl text-orange-500 font-semibold">Ziad Elasyed</h4>
                                        <span className="text-sm text-textColor ">Co-Founder of CodeWave</span>
                                    </div>
                                    <div className="right-image">
                                        <img
                                            src="/images/ziad.jpg"
                                            alt="Ziad Elasyed"
                                            className="w-40 h-40 rounded-xl object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

            <section
                className="callto spad bg-cover bg-center py-16 mb-30 opacity-50"
                style={{ backgroundImage: "url('../images/drone.jpg')" }}
            >
                <div className="container mx-auto">
                    <div className="row flex">
                        <div className="lg:w-2/3">
                            <div className="callto__text text-black">
                                <h2 className="text-4xl font-bold mb-2 mt-80">
                                    Fresh Ideas, Fresh Moments Giving Wings to your Stories.
                                </h2>
                                <p className="mb-6">INC5000, Best places to work 2019</p>
                                <a
                                    href="#"
                                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Start your stories
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    );
};

export default Cards;

