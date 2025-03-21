import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const NewsCarousal = () => {
  // News items data
  const newsItems = [
    {
      title: "How to Remove Prop Guards & Change Propellers",
      description: "A step-by-step guide for drone maintenance and customization to improve flight performance and speed.",
      image: "https://storage.googleapis.com/a1aa/image/ZOsMS1b-ejAyJe_3OzYi1BvHW8INfwQGiNPePtEkU-E.jpg",
      alt: "A drone flying over a field",
    },
    {
      title: "The Drone Racing League Lineup of Pilots for the 2025",
      description: "Meet the top pilots competing in this year's DRL championship featuring newcomers and returning champions.",
      image: "https://storage.googleapis.com/a1aa/image/QRZD2aHWH2f7ixvNUu__CrEZGUoxhr3O4p2AFOtXkIs.jpg",
      alt: "Two people flying drones in a field",
    },
    {
      title: "Lexar Silver Plus 256GB Micro SD Card Review",
      description: "We test the latest high-capacity SD card to see if it's worth the investment for your drone photography needs.",
      image: "https://storage.googleapis.com/a1aa/image/XBkONQMziSHjPJ9jOKunLSBcZKhDmwVubr99ZcgFjU0.jpg",
      alt: "A drone spraying crops in a field",
    },
    {
      title: "AI-Powered Obstacle Avoidance: The Future of Drone Safety",
      description: "How machine learning algorithms are revolutionizing drone navigation and preventing costly crashes.",
      image: "https://storage.googleapis.com/a1aa/image/XBkONQMziSHjPJ9jOKunLSBcZKhDmwVubr99ZcgFjU0.jpg",
      alt: "Drone avoiding obstacles in flight",
    },
    {
      title: "Top 5 Drones for Beginners in 2025",
      description: "Our experts recommend the best entry-level drones that combine affordability with advanced features.",
      image: "https://storage.googleapis.com/a1aa/image/XBkONQMziSHjPJ9jOKunLSBcZKhDmwVubr99ZcgFjU0.jpg",
      alt: "Entry-level drone hovering",
    },
    {
      title: "Drone Regulations Update: What You Need to Know",
      description: "Recent changes to FAA guidelines and international drone laws that affect recreational and commercial pilots.",
      image: "https://storage.googleapis.com/a1aa/image/XBkONQMziSHjPJ9jOKunLSBcZKhDmwVubr99ZcgFjU0.jpg",
      alt: "Drone flying with regulatory symbols",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayIntervalRef = useRef(null);
  const containerRef = useRef(null);

  // Function to update card widths based on window size
  const updateCardWidths = () => {
    const width = window.innerWidth;
    
    if (width < 640) {
      setVisibleCards(1);
    } else if (width < 1024) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    const maxIndex = Math.max(0, newsItems.length - visibleCards);
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  // Function to go to next slide
  const goToNext = () => {
    const maxIndex = newsItems.length - visibleCards;
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  // Function to go to previous slide
  const goToPrev = () => {
    const maxIndex = newsItems.length - visibleCards;
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  // Function to start auto play
  const startAutoPlay = () => {
    stopAutoPlay();
    if (!isPaused) {
      autoPlayIntervalRef.current = setInterval(goToNext, 3000);
    }
  };

  // Function to stop auto play
  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
  };

  // Initialize and handle resize
  useEffect(() => {
    updateCardWidths();
    window.addEventListener('resize', updateCardWidths);
    return () => {
      window.removeEventListener('resize', updateCardWidths);
      stopAutoPlay();
    };
  }, []);

  // Handle autoplay
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [isPaused, visibleCards]);

  // Handle currentIndex changes when visibleCards changes
  useEffect(() => {
    goToSlide(Math.min(currentIndex, newsItems.length - visibleCards));
  }, [visibleCards]);

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center sm:text-2xl md:text-3xl lg:text-6xl">
        News & Articles
      </h1>

      <div 
        className="relative"
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel wrapper */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300" 
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {newsItems.map((item, index) => (
              <div 
                key={index} 
                className="flex-none px-3"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden h-96 group relative">
                  <div className="relative">
                    <img
                      alt={item.alt}
                      className="w-full h-48 object-cover"
                      src={item.image}
                    />
                    <div className="absolute top-2 right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md z-10 text-gray-800"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md z-10 text-gray-800"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel indicators */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.max(1, newsItems.length - visibleCards + 1) }).map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 mx-1 rounded-full ${i === currentIndex ? 'bg-green-500' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCarousal;