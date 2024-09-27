import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Cards = () => {

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
    
 
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    // Toggle function to switch the theme
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };

  return (
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
  );
};

export default Cards;

