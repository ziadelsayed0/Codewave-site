import React from 'react';
import { useEffect, useState } from "react";

const slides = [
  {
    subtitle: "For website development",
    title: "Developer’s Portfolio",
    buttonText: "See more about us",
    image: "../images/ui-ux.jpg",
  },
  {
    subtitle: "Get ready for your business",
    title: "Ai Integration",
    buttonText: "Discover More",
    image: "../images/code.jpg",
  },
  {
    subtitle: "Creative Website Design",
    title: "Unique Web Designs",
    buttonText: "Learn More",
    image: "../images/software-engineer.jpg",
  },
];

const Sliderview = () => {

  const [activeSlide, setActiveSlide] = useState(0);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideUp(false); // Start slide down (disappear)

      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length); // Switch slides
        setSlideUp(true); // Slide up (appear)
      }, 500); // Time for the slide down animation to finish
    }, 4000); // Slide duration (4 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  return (
    <section className="hero relative">
      <div className="relative  h-[700px]">
        {/* Slider Container */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-3000"
          style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
        >
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-60">
            {/* Text Section */}
            <div
              className={`hero__text transform transition duration-1000 ease-in-out ${slideUp ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <span className="text-sm md:text-lg lg:text-xl text-gray-300">
                {slides[activeSlide].subtitle}
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-2">
                {slides[activeSlide].title}
              </h2>
              <a
                href="#"
                className="primary-btn inline-block mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
              >
                {slides[activeSlide].buttonText}
              </a>
            </div>
          </div>
        </div>

        {/* Slider Navigation with Numbers */}
        <div className="absolute bottom-8 left-60 space-x-4 flex items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`text-white text-lg ${activeSlide === index ? "font-bold" : "opacity-50"
                }`}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Sliderview;
