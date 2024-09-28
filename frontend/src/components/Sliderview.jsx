import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const slides = [
  {
    title: "Best One in Town<br />&amp; Crypto <em>Services</em>",
    description: "When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.",
    more: "/more"
  },
  {
    title: "Get <em>ready</em> for your business<br />&amp; upgrade <em>all aspects</em>",
    description: "Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.",
    more: "/more"
  },
  {
    title: "<em>Digital</em> Currency for you <br />&amp; Best <em>Crypto</em> Tips",
    description: "You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. It does not ask you anything in return. You have a total freedom to use any template for any purpose.",
    more: "/more"
  }
]



const Sliderview = () => {
  // NavBar Appearance 
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 80) {
      navbar.classList.add('bg-black', 'text-white');
      navbar.classList.remove('bg-transparent', 'text-white');
    } else {
      navbar.classList.add('bg-transparent', 'text-black');
      navbar.classList.remove('bg-black', 'text-black');
    }
  });

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
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white opacity-50  p-2 rounded-full shadow-md hover:bg-gray-200"
        onClick={onClick}
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white opacity-50 p-2 rounded-full shadow-md hover:bg-gray-200"
        onClick={onClick}
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
    );
  }

  // Function to generate the slides
  function CreateSlides() {
    return slides.map((slide, idx) => (
      <div key={idx} className="relative w-full h-[700px]">
        <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
          <div className="text-left text-white  mx-auto lg:p-40 p-10">
            <h2 className="text-xl lg:text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: slide.title }}></h2>
            <p className="lg:text-lg text-sm mb-6">{slide.description}</p>
            <div className="flex space-x-4">
              <a href={slide.more} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Discover More</a>
              <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <section>
      <div className="relative overflow-hidden cursor-grab w-full h-[700px] bg-cover bg-center" id="top" style={{ backgroundImage: "url('../images/slider2.jpg')" }}>
        <Slider {...sliderSettings}>
          {CreateSlides()} {/* Call the function to render slides */}
        </Slider>
      </div>
    </section>
  );
};

export default Sliderview;
