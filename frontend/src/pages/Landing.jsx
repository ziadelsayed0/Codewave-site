import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sliderview from '../components/Sliderview';
import Top from '../components/Top';
import Conversations from '../components/Conversations';
import HowItWorks from '../components/HowItWorks';
import Cards from '../components/Cards';

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
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function to switch the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={` ${isDarkMode ? 'text-white' : 'text-black'} bg-background`} >
        <Header />
        <Sliderview />
        <Top />
        <HowItWorks />
        <Conversations />
        <Cards />
        <Footer />
</div>
);
}

export default LandingPage;