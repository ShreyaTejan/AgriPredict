import React, { useState, useEffect, useRef } from 'react';
import resource from "../assets/feature-2.jpg"
import sapling from "../assets/sapling.png"
import boy from "../assets/boy.png"
const ResourcesPage = () => {
  // State variables
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentCategory, setCurrentCategory] = useState('all');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState(8);
  const cardsPerLoad = 4;
  const categoryDropdownRef = useRef(null);

  // Initial resource data
  const resourceCards = [
    {
      id: 1,
      type: "pdf",
      category: "crop",
      title: "Seasonal Crop Selection Guide",
      description: "Comprehensive guide to selecting the best crops based on season, soil, and climate.",
      author: "AgriPredict Team",
      date: "2024-08-15",
      popularity: 95,
      action: "Free Download",
      icon: "download"
    },
    {
      id: 2,
      type: "toolkit",
      category: "soil",
      title: "Soil Analysis Toolkit",
      description: "Interactive tools to help analyze soil quality and nutritional content for better farming.",
      author: "Dr. Sarah Johnson",
      date: "2024-09-10",
      popularity: 87,
      action: "Free Download",
      icon: "download"
    },
    {
      id: 3,
      type: "webinar",
      category: "weather",
      title: "Predicting Weather Patterns",
      description: "Learn how AI can help predict weather patterns for better agricultural planning.",
      author: "Prof. Michael Chen",
      date: "2024-07-25",
      popularity: 92,
      action: "Watch Now",
      icon: "play-circle"
    },
    {
      id: 4,
      type: "case study",
      category: "crop",
      title: "Crop Yield Optimization",
      description: "Real-world case study on how AI helped increase crop yields by 37% in arid regions.",
      author: "AgriPredict Research",
      date: "2024-10-05",
      popularity: 89,
      action: "Read Case Study",
      icon: "file-alt"
    },
    {
      id: 5,
      type: "guide",
      category: "crop",
      title: "Smart Irrigation Systems",
      description: "Step-by-step guide to implementing AI-powered irrigation systems for water conservation.",
      author: "Eng. Robert Taylor",
      date: "2024-06-12",
      popularity: 84,
      action: "Free Download",
      icon: "download"
    },
    {
      id: 6,
      type: "video",
      category: "crop",
      title: "AI-Based Pest Management",
      description: "Video tutorial on using image recognition to identify and manage crop pests efficiently.",
      author: "Dr. Emily Watson",
      date: "2024-08-30",
      popularity: 91,
      action: "Watch Video",
      icon: "play-circle"
    },
    {
      id: 7,
      type: "research",
      category: "market",
      title: "Crop Market Analytics",
      description: "Research paper on predicting market trends to maximize profits for small-scale farmers.",
      author: "Dr. James Rodriguez",
      date: "2024-09-20",
      popularity: 83,
      action: "Read Research",
      icon: "file-pdf"
    },
    {
      id: 8,
      type: "guide",
      category: "sustainability",
      title: "Sustainable Farming Practices",
      description: "Comprehensive guide to implementing sustainable farming practices using AgriPredict data.",
      author: "AgriPredict Sustainability",
      date: "2024-07-05",
      popularity: 88,
      action: "Free Download",
      icon: "download"
    },
    {
      id: 9,
      type: "webinar",
      category: "crop",
      title: "Advanced Crop Rotation Strategies",
      description: "Webinar on maximizing soil health and yield through strategic crop rotation.",
      author: "Dr. Lisa Wong",
      date: "2024-09-15",
      popularity: 86,
      action: "Watch Now",
      icon: "play-circle"
    },
    {
      id: 10,
      type: "case study",
      category: "sustainability",
      title: "Reduced Water Usage Success Story",
      description: "How small farms reduced water consumption by 40% while increasing yields.",
      author: "Water Conservation Team",
      date: "2024-08-22",
      popularity: 90,
      action: "Read Case Study",
      icon: "file-alt"
    },
    {
      id: 11,
      type: "toolkit",
      category: "market",
      title: "Price Prediction Tools",
      description: "Interactive toolkit to forecast market prices for various crops in your region.",
      author: "Market Analysis Team",
      date: "2024-10-12",
      popularity: 85,
      action: "Free Download",
      icon: "download"
    },
    {
      id: 12,
      type: "guide",
      category: "soil",
      title: "Organic Fertilization Guide",
      description: "Complete guide to natural fertilization methods for organic farming certification.",
      author: "Organic Farming Association",
      date: "2024-09-05",
      popularity: 82,
      action: "Free Download",
      icon: "download"
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setCategoryDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter resources based on current filter and category
  const filteredResources = resourceCards.filter(card => {
    return (currentFilter === 'all' || card.type === currentFilter) && 
           (currentCategory === 'all' || card.category === currentCategory);
  });

  // Get color based on retention value
  const getColor = (value) => {
    const intensity = Math.floor((value / 100) * 255);
    return `rgb(${255 - intensity}, ${255 - intensity}, 255)`;
  };

  // Filter button click handler
  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
    setVisibleCards(8); // Reset visible cards count
  };

  // Category option click handler
  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setCategoryDropdownOpen(false);
    setVisibleCards(8); // Reset visible cards count
  };

  // Load more button click handler
  const handleLoadMore = () => {
    setVisibleCards(prev => prev + cardsPerLoad);
  };

  // Get the appropriate icon component based on the name
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'download':
        return <i className="fas fa-download"></i>;
      case 'play-circle':
        return <i className="fas fa-play-circle"></i>;
      case 'file-alt':
        return <i className="fas fa-file-alt"></i>;
      case 'file-pdf':
        return <i className="fas fa-file-pdf"></i>;
      default:
        return <i className="fas fa-file"></i>;
    }
  };

  return (
    <div className="min-h-screen relative bg-gray-900">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-black opacity-50 z-0 bg"><img
                src={resource}
                alt="Background"
                className="w-full h-full object-cover filter blur-[7px]"
              /></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">Resources</h1>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-0 overflow-x-auto">
              <button 
                className={`px-4 py-2 rounded-md bg-[#151F14] hover:bg-opacity-80 text-white ${currentFilter === 'all' ? 'bg-[#4caf50]' : ''}`}
                onClick={() => handleFilterClick('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-md bg-[#151F14] hover:bg-opacity-80 text-white ${currentFilter === 'guide' ? 'bg-[#4caf50]' : ''}`}
                onClick={() => handleFilterClick('guide')}
              >
                Guides
              </button>
              <button 
                className={`px-4 py-2 rounded-md bg-[#151F14] hover:bg-opacity-80 text-white ${currentFilter === 'case study' ? 'bg-[#4caf50]' : ''}`}
                onClick={() => handleFilterClick('case study')}
              >
                Case Studies
              </button>
              <button 
                className={`px-4 py-2 rounded-md bg-[#151F14] hover:bg-opacity-80 text-white ${currentFilter === 'webinar' ? 'bg-[#4caf50]' : ''}`}
                onClick={() => handleFilterClick('webinar')}
              >
                Webinars
              </button>
              <button 
                className={`px-4 py-2 rounded-md bg-[#151F14] hover:bg-opacity-80 text-white ${currentFilter === 'toolkit' ? 'bg-[#4caf50]' : ''}`}
                onClick={() => handleFilterClick('toolkit')}
              >
                Tools
              </button>
            </div>

            {/* Category Dropdown */}
            <div className="relative" ref={categoryDropdownRef}>
              <button
                className="bg-[#151F14] flex items-center space-x-1 hover:bg-opacity-80 text-white px-4 py-2 rounded-md"
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              >
                <span>{currentCategory === 'all' ? 'All Categories' : 
                       currentCategory === 'crop' ? 'Crop Management' :
                       currentCategory === 'soil' ? 'Soil Health' :
                       currentCategory === 'weather' ? 'Weather' :
                       currentCategory === 'market' ? 'Market Analysis' :
                       'Sustainability'}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {categoryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#151F14] rounded-md shadow-lg z-50">
                  <ul className="py-1">
                    <li>
                      <button onClick={() => handleCategoryClick('all')} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#4caf50]">
                        All Categories
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleCategoryClick('crop')} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#4caf50]">
                        Crop Management
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleCategoryClick('soil')} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#4caf50]">
                        Soil Health
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleCategoryClick('weather')} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#4caf50]">
                        Weather
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleCategoryClick('market')} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#4caf50]">
                        Market Analysis
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleCategoryClick('sustainability')} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#4caf50]">
                        Sustainability
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.length > 0 ? (
              filteredResources.slice(0, visibleCards).map((card, index) => (
                <div
                  key={card.id}
                  className="bg-[#151F14] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={sapling}
                      alt={card.title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-[#4caf50] text-white text-xs px-2 py-1 rounded">
                      {card.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-white line-clamp-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                      {card.description}
                    </p>
                    <div className="flex items-center mb-3">
                      <img
                        src={boy}
                        alt={card.author}
                        className="w-8 h-8 rounded-full border-2 border-[#4caf50]"
                      />
                      <span className="ml-2 text-sm text-white">{card.author}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-300">
                      <button className="flex items-center space-x-1 hover:text-[#4caf50] transition">
                        {getIcon(card.icon)}
                        <span className="ml-2">{card.action}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-[#4caf50] transition">
                        <i className="fas fa-history"></i>
                        <span className="ml-2">View History</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-white text-lg">
                No resources found matching your criteria.
              </div>
            )}
          </div>

          {/* Load More Button */}
          {filteredResources.length > visibleCards && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-[#151F14] hover:bg-opacity-80 text-white px-8 py-3 rounded-full transition border-2 border-[#4caf50]"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;