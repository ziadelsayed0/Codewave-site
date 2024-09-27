import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliderview = () => {
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


  return (
    <section>
            <div className="relative overflow-hidden cursor-grab w-full h-[600px] bg-cover bg-center" id="top" style={{ backgroundImage: "url('../images/slider2.jpg')" }}>
                <Slider {...sliderSettings}>
                {/* Slide 1 */}
                <div className="relative w-full h-[600px]">
                    <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
                    <div className="text-left text-white max-w-lg mx-auto p-6">
                        <h2 className="text-3xl font-bold mb-4">Best One in Town<br />&amp; Crypto <em>Services</em></h2>
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
  );
};

export default Sliderview;