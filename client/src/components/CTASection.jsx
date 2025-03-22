import React from 'react'
import cta from '../assets/cta.jpg'
const CTASection = () => {
  return (
    <section className="relative w-full py-25 px-6 md:px-24 mb-16 text-center text-white overflow-hidden z-10">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-[5px] z-[-2]"
        style={{ backgroundImage: `url(${cta})` }}
      />
      
      {/* Overlay */}
      <div className="overlay" />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl mb-5 text-white font-bold text-shadow shadow-black/50">
          Ready to Optimize Your Farm?
        </h2>
        
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Start making data-driven decisions for your farm today.
        </p>
        
        <div className="flex flex-wrap justify-center gap-5">
          <a href='/signup' className="bg-yellow-500 text-gray-800 font-bold py-4 px-8 text-lg rounded-lg cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-yellow-400 hover:-translate-y-1 hover:shadow-lg">
            Get Started
          </a>
          
          <a href='/soil-analysis' className="bg-transparent text-white font-bold py-4 px-8 text-lg rounded-lg cursor-pointer transition-all duration-300 ease-in-out border-2 border-white hover:bg-white/20 hover:-translate-y-1">
            Try Soil Analysis
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection