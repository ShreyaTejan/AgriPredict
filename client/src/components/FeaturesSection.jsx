import React from 'react';
import feature_1 from "../assets/feature-1.jpg"
import feature_2 from "../assets/feature-2.jpg"
import feature_3 from "../assets/feature-3.jpg"

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-4 px-4 overflow-hidden relative" id="features">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-5 text-gray-800">Why We Are</h1>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            Turning food waste into clean energy and organic fertilizers, we 
            create a sustainable future while reducing landfill pollution and 
            carbon emissions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mt-6 sm:mt-8">
          {/* First image */}
          <div className="rounded-lg overflow-hidden h-48 sm:h-60">
            <img 
              src={feature_1}
              alt="Person drinking from stream" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Promotes Soil Health */}
          <div className="bg-gray-200 rounded-lg h-48 sm:h-60 flex flex-col justify-center items-center p-4 sm:p-5 text-center">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-green-700" viewBox="0 0 100 100">
              <path 
                d="M25,80 C25,65 35,65 50,65 C65,65 75,65 75,80" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
              />
              <path 
                d="M35,65 C35,50 40,50 50,50 C60,50 65,50 65,65" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
              />
              <path 
                d="M45,50 C45,35 47,35 50,35 C53,35 55,35 55,50" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
              />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Promotes Soil Health</h3>
            <p className="text-sm sm:text-base leading-relaxed max-w-xs">
              We create a sustainable future while reducing landfill pollution and 
              carbon emissions.
            </p>
          </div>
          
          {/* Second image */}
          <div className="rounded-lg overflow-hidden h-48 sm:h-60">
            <img 
              src={feature_2}
              alt="Circular eco building" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Saves Water & Resources */}
          <div className="bg-gray-200 rounded-lg h-48 sm:h-60 flex flex-col justify-center items-center p-4 sm:p-5 text-center">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-green-700" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="20" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
              />
              <path 
                d="M50,30 C60,30 65,45 55,55" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
              />
              <path 
                d="M30,65 C25,70 35,80 40,75" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
              />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Saves Water & Resources</h3>
            <p className="text-sm sm:text-base leading-relaxed max-w-xs">
              We create a sustainable future while reducing landfill pollution and 
              carbon emissions.
            </p>
          </div>
          
          {/* Third image */}
          <div className="rounded-lg overflow-hidden h-48 sm:h-60">
            <img 
              src={feature_3}
              alt="Hands holding soil with plant" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decrease Carbon */}
          <div className="bg-gray-200 rounded-lg h-48 sm:h-60 flex flex-col justify-center items-center p-4 sm:p-5 text-center">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-green-700" viewBox="0 0 100 100">
              <path 
                d="M30,70 C45,40 65,60 75,30" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
              />
              <path 
                d="M75,30 C65,35 60,30 65,25" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
              />
              <path 
                d="M75,30 C70,40 65,35 70,30" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
              />
            </svg>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Decrease Carbon</h3>
            <p className="text-sm sm:text-base leading-relaxed max-w-xs">
              We create a sustainable future while reducing landfill pollution and 
              carbon emissions.
            </p>
            <p id="how_it_works"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;