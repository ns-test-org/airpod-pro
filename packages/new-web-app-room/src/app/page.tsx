'use client';

import { useState, useEffect } from 'react';

export default function AirPodsProPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Active Noise Cancellation",
      description: "Industry-leading noise cancellation that adapts to your environment",
      icon: "🔇"
    },
    {
      title: "Spatial Audio",
      description: "Immersive 3D audio that follows the movement of your head",
      icon: "🎵"
    },
    {
      title: "Adaptive Transparency",
      description: "Hear what you need to while staying immersed in your music",
      icon: "👂"
    },
    {
      title: "All-Day Battery",
      description: "Up to 6 hours of listening time with ANC on, 30 hours with case",
      icon: "🔋"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold">🍎 Apple</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#specs" className="text-gray-300 hover:text-white transition-colors">Specs</a>
            <a href="#buy" className="text-gray-300 hover:text-white transition-colors">Buy</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Buy Now
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div 
          className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <h1 className="text-6xl md:text-8xl font-thin mb-6 tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            AirPods Pro
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Magical. Immersive. Personal.
          </p>
          
          {/* Enhanced Product Image */}
          <div className="relative w-80 h-80 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center text-6xl transform group-hover:scale-110 transition-all duration-500 shadow-2xl">
              🎧
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-thin text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Advanced Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 transition-all duration-500 cursor-pointer hover:bg-gray-800/50 hover:border-gray-700 hover:transform hover:scale-105 ${
                  activeFeature === index ? 'ring-2 ring-blue-500 bg-gray-800/70' : ''
                }`}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-4xl mb-4 transform transition-transform duration-300 hover:scale-110">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                
                {/* Active indicator */}
                {activeFeature === index && (
                  <div className="mt-4 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Feature detail display */}
          <div className="mt-16 text-center">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 max-w-2xl mx-auto">
              <div className="text-5xl mb-4">{features[activeFeature].icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{features[activeFeature].title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{features[activeFeature].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section id="specs" className="py-20 px-6 bg-gray-900/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-thin text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Technical Specifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group">
              <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-3">
                  <span className="text-3xl">🎵</span>
                  Audio
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Custom high-excursion Apple driver
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Custom high dynamic range amplifier
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Adaptive EQ
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Spatial Audio with dynamic head tracking
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group">
              <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  Chip
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Apple H2 chip
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Computational audio
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Advanced algorithms
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Ultra-low power consumption
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group">
              <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-6 text-green-400 flex items-center gap-3">
                  <span className="text-3xl">🎛️</span>
                  Controls
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Force sensor for media control
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Touch control for volume
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    &ldquo;Hey Siri&rdquo; voice activation
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Automatic switching between devices
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group">
              <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400 flex items-center gap-3">
                  <span className="text-3xl">🔋</span>
                  Battery
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Up to 6 hours listening time
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Up to 30 hours with charging case
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    5 minutes charge = 1 hour playback
                  </li>
                  <li className="flex items-center gap-3 hover:text-white transition-colors">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    Wireless charging case
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="buy" className="py-20 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-thin mb-8 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            Experience the Magic
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover how AirPods Pro can transform your audio experience with cutting-edge technology and seamless integration.
          </p>
          
          {/* Price display */}
          <div className="mb-8">
            <div className="text-3xl font-light text-white mb-2">Starting at</div>
            <div className="text-5xl font-thin text-blue-400">$249</div>
            <div className="text-gray-400 mt-2">or $20.75/mo. for 12 mo.*</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Buy Now
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-800/50">
              Try in Store
            </button>
          </div>
          
          {/* Additional options */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <div className="text-2xl mb-3">📦</div>
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-400 text-sm">Get free delivery, or pick up available items at an Apple Store.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <div className="text-2xl mb-3">💳</div>
              <h3 className="font-semibold mb-2">Pay Monthly</h3>
              <p className="text-gray-400 text-sm">Choose Apple Card Monthly Installments when you check out.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="font-semibold mb-2">Trade In</h3>
              <p className="text-gray-400 text-sm">Get credit toward AirPods Pro when you trade in eligible headphones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2024 Apple Inc. All rights reserved. AirPods Pro and Apple are trademarks of Apple Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}









