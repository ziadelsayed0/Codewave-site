import React from 'react';


const Services = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle function to switch the theme
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };
  return (
 <section className="relative py-12 md:py-24 bg-body overflow-hidden">
 <div className="relative container mx-auto px-4">
     <div className="max-w-md mx-auto lg:max-w-none relative">
     <h2 className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6">CodeWave Services</h2>
     <p className="text-xl text-gray-500 tracking-tight mb-16">Mi turpis turpis in justo pellentesque id nibh praesent.</p>
     <div className="flex flex-wrap -mx-4">
         <div className="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
             <div className="transition-transform transform hover:scale-105 duration-300">
             <img className="block mb-6" src="casper-assets/services/circle-icon1.png" alt="" />
             <h4 className="font-heading text-3xl font-medium relative">
                 Intelligent Conversations
                 <span className="absolute left-0 -bottom-7 w-2/4 h-1 bg-orange-600"></span>
             </h4>
             <div className="h-1 bg-white bg-opacity-10 my-6 rounded-md bg-gray-900"></div>
             <p className={`max-w-sm text-xl tracking-tight leading-relaxed ${isDarkMode ? 'text-violet-50' : 'text-black'}`}>
                 From answering questions to providing recommendations, our AI assistant will engage your visitors effortlessly.
             </p>
             </div>
         </div>

         <div className="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
             <div className="transition-transform transform hover:scale-105 duration-300">
             <img className="block mb-6" src="casper-assets/services/circle-icon3.png" alt="" />
             <h4 className="font-heading text-3xl font-medium relative">
                 Intelligent Conversations
                 <span className="absolute left-0 -bottom-7 w-2/4 h-1 bg-orange-600"></span>
             </h4>
             <div className="h-1 bg-white bg-opacity-10 my-6 rounded-md"></div>
             <p className={`max-w-xs text-xl tracking-tight leading-relaxed ${isDarkMode ? 'text-violet-50' : 'text-black'}`}>
                 By understanding your visitors' needs, our chat assistant creates a unique experience.
             </p>
             </div>
         </div>

         <div className="w-full lg:w-1/3 px-4">
             <div className="transition-transform transform hover:scale-105 duration-300">
             <img className="block mb-6" src="casper-assets/services/circle-icon2.png" alt="" />
             <h4 className="font-heading text-3xl font-medium relative">
                 Intelligent Conversations
                 <span className="absolute left-0 -bottom-7 w-2/4 h-1 bg-orange-600"></span>
             </h4>
             <div className="h-1 bg-white bg-opacity-10 my-6 rounded-md"></div>
             <p className={`max-w-xs text-xl tracking-tight leading-relaxed ${isDarkMode ? 'text-violet-50' : 'text-black'}`}>
                 Say goodbye to static web pages and hello to an interactive, conversational platform.
             </p>
             </div>
         </div>
         </div>

     </div>
 </div>
</section>
  );
};

export default Services;
 
 
 