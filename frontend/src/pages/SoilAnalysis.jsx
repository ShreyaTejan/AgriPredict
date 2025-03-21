import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import field from "../assets/land.jpg"
import crop  from "../assets/crop.png"

function SoilAnalysis() {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    rainfall: '',
    pH: ''
  });
  
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  
  // Check for URL params on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('result')) {
      showResult(urlParams.get('result'));
    }
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value, min, max } = e.target;
    const parsedValue = parseFloat(value);
    
    // Validate input range
    if (value !== '' && (parsedValue < parseFloat(min) || parsedValue > parseFloat(max))) {
      e.target.setCustomValidity(
        parsedValue < parseFloat(min) 
          ? `Value should be at least ${min}` 
          : `Value should not exceed ${max}`
      );
    } else {
      e.target.setCustomValidity('');
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!e.target.checkValidity()) {
      e.stopPropagation();
      return;
    }
    
    setIsSubmitting(true);
    setProgress(50);
    
    // Simulate API call
    setTimeout(() => {
      setProgress(100);
      showResult('Rice');
      setIsSubmitting(false);
    }, 1500);
  };
  
  const showResult = (cropName) => {
    setResult(cropName);
    
    // Scroll to result after it appears
    setTimeout(() => {
      document.getElementById('resultCard')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }, 100);
  };
  
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${field})` }}>     
      <div className="container mx-auto px-4 py-8">
        <div className="bg-[rgba(10,31,10,0.85)] backdrop-blur-md rounded-lg p-6 md:p-8 mt-24 mb-12 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
            Predict Your Ideal <span className="text-green-500 inline-block animate-pulse">Crop 🌱</span>
          </h1>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-white/30 rounded-full">
              <div 
                className="h-2 bg-green-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
                role="progressbar" 
                aria-valuenow={progress} 
                aria-valuemin="0" 
                aria-valuemax="100"
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              <small className="text-white">Enter Data</small>
              <small className="text-white">Processing</small>
              <small className="text-white">Results</small>
            </div>
          </div>
          
          {/* Prediction Form */}
          <form id="predictionForm" onSubmit={handleSubmit} className="space-y-6">
            {/* Soil Nutrients Section */}
            <div className="bg-white/95 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-green-900 mb-6 border-l-4 border-green-500 pl-3">Soil Nutrients</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="nitrogen" className="block text-gray-700 font-medium mb-2">Nitrogen</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      id="nitrogen" 
                      name="nitrogen" 
                      placeholder="Enter amount" 
                      className="flex-grow rounded-l-lg border border-gray-300 p-3 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none" 
                      min="0" 
                      max="150" 
                      required 
                      data-tooltip-id="nitrogen-tooltip"
                      data-tooltip-content="Common range: 0-140 kg/ha"
                      value={formData.nitrogen}
                      onChange={handleInputChange}
                    />
                    <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-100 text-gray-600">kg/ha</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">Typical range: 0-140 kg/ha</div>
                  <Tooltip id="nitrogen-tooltip" />
                </div>
                
                <div>
                  <label htmlFor="phosphorus" className="block text-gray-700 font-medium mb-2">Phosphorus</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      id="phosphorus" 
                      name="phosphorus" 
                      placeholder="Enter amount" 
                      className="flex-grow rounded-l-lg border border-gray-300 p-3 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none" 
                      min="0" 
                      max="150" 
                      required 
                      data-tooltip-id="phosphorus-tooltip"
                      data-tooltip-content="Common range: 0-140 kg/ha"
                      value={formData.phosphorus}
                      onChange={handleInputChange}
                    />
                    <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-100 text-gray-600">kg/ha</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">Typical range: 0-140 kg/ha</div>
                  <Tooltip id="phosphorus-tooltip" />
                </div>
                
                <div>
                  <label htmlFor="potassium" className="block text-gray-700 font-medium mb-2">Potassium</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      id="potassium" 
                      name="potassium" 
                      placeholder="Enter amount" 
                      className="flex-grow rounded-l-lg border border-gray-300 p-3 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none" 
                      min="0" 
                      max="210" 
                      required 
                      data-tooltip-id="potassium-tooltip"
                      data-tooltip-content="Common range: 0-200 kg/ha"
                      value={formData.potassium}
                      onChange={handleInputChange}
                    />
                    <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-100 text-gray-600">kg/ha</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">Typical range: 0-200 kg/ha</div>
                  <Tooltip id="potassium-tooltip" />
                </div>
              </div>
            </div>
            
            {/* Climate Conditions Section */}
            <div className="bg-white/95 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-green-900 mb-6 border-l-4 border-green-500 pl-3">Climate Conditions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="temperature" className="block text-gray-700 font-medium mb-2">Temperature</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      step="0.1" 
                      id="temperature" 
                      name="temperature" 
                      placeholder="Enter value" 
                      className="flex-grow rounded-l-lg border border-gray-300 p-3 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none" 
                      min="-10" 
                      max="60" 
                      required 
                      data-tooltip-id="temperature-tooltip"
                      data-tooltip-content="Common range: 5-45°C"
                      value={formData.temperature}
                      onChange={handleInputChange}
                    />
                    <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-100 text-gray-600">°C</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">Typical range: 5-45°C</div>
                  <Tooltip id="temperature-tooltip" />
                </div>
                
                <div>
                  <label htmlFor="humidity" className="block text-gray-700 font-medium mb-2">Humidity</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      step="0.1" 
                      id="humidity" 
                      name="humidity" 
                      placeholder="Enter value" 
                      className="flex-grow rounded-l-lg border border-gray-300 p-3 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none" 
                      min="0" 
                      max="100" 
                      required 
                      data-tooltip-id="humidity-tooltip"
                      data-tooltip-content="Common range: 20-100%"
                      value={formData.humidity}
                      onChange={handleInputChange}
                    />
                    <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-100 text-gray-600">%</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">Typical range: 20-100%</div>
                  <Tooltip id="humidity-tooltip" />
                </div>
                
                <div>
                  <label htmlFor="rainfall" className="block text-gray-700 font-medium mb-2">Rainfall</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      step="0.1" 
                      id="rainfall" 
                      name="rainfall" 
                      placeholder="Enter amount" 
                      className="flex-grow rounded-l-lg border border-gray-300 p-3 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none" 
                      min="0" 
                      max="4000" 
                      required 
                      data-tooltip-id="rainfall-tooltip"
                      data-tooltip-content="Common range: 50-3000mm"
                      value={formData.rainfall}
                      onChange={handleInputChange}
                    />
                    <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-100 text-gray-600">mm</span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">Typical range: 50-3000mm</div>
                  <Tooltip id="rainfall-tooltip" />
                </div>
              </div>
            </div>
            
            {/* Soil Properties Section */}
            <div className="bg-white/95 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-green-900 mb-6 border-l-4 border-green-500 pl-3">Soil Properties</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="pH" className="block text-gray-700 font-medium mb-2">Soil pH</label>
                  <input 
                    type="number" 
                    step="0.1" 
                    id="pH" 
                    name="pH" 
                    placeholder="Enter pH value (0-14)" 
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:ring focus:ring-green-200 focus:outline-none" 
                    min="0" 
                    max="14" 
                    required 
                    data-tooltip-id="ph-tooltip"
                    data-tooltip-content="Common range: 4.0-9.0"
                    value={formData.pH}
                    onChange={handleInputChange}
                  />
                  <div className="text-gray-500 text-sm mt-1">Typical range: 4.0-9.0</div>
                  <Tooltip id="ph-tooltip" />
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="text-center mt-8">
              <button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="inline w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Get Crop Recommendation <i className="fas fa-seedling ml-2"></i>
                  </>
                )}
              </button>
            </div>
          </form>
          
          {/* Result Card */}
          {result && (
            <div 
              id="resultCard" 
              className={`bg-white rounded-xl overflow-hidden shadow-xl max-w-lg mx-auto mt-8 flex flex-col items-center opacity-100 transform translate-y-0 transition-all duration-500`}
            >
              <img src={crop} className="h-40 object-contain mt-6 mx-auto" alt="Recommended Crop" />
              <div className="p-6 w-full">
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  Your recommended crop is: <span>{result}</span>
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Based on your soil and climate data, this crop has the highest probability of success.
                </p>
                <div className="text-center">
                  <a 
                    href="/crop-details" 
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-md"
                  >
                    Learn more about this crop <i className="fas fa-info-circle ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SoilAnalysis;