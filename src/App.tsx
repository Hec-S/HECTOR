import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, Zap, PiggyBank, BarChart3, ExternalLink, BookOpen, Dumbbell, Globe, Star, Bot } from 'lucide-react';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const platformsRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  
  const platforms = [
    {
      name: "AI-Powered Inventory Management",
      tagline: "Smart Automation for E-Commerce Businesses",
      description: "An AI-driven automation system designed to help e-commerce businesses efficiently manage inventory. This AI agent tracks stock levels, predicts demand, and automates restocking—reducing manual workload and optimizing operations.",
      url: null,
      icon: Bot,
      featured: false,
      category: "AI"
    },
    {
      name: "CampusConnect",
      tagline: "For Students, By Students",
      description: "An online platform designed to help students collaborate, share academic resources, and succeed together.",
      url: "https://campus-connect.institute",
      icon: BookOpen,
      featured: false,
      category: "Education"
    },
    {
      name: "JeiFit",
      tagline: "Expanding Training Services Online",
      description: "An online platform built for my client to scale his training services and reach more clients effectively.",
      url: "https://jeifit.com",
      icon: Dumbbell,
      featured: false,
      category: "Fitness"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"></div>
        <div ref={heroRef} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto text-center leading-tight opacity-0 translate-y-10 transition-all duration-1000 ease-out fade-in">
            I create solutions that don't just exist—
            <span className="gradient-text">
              they drive results.
            </span>
          </h1>
          <div className="mt-12 flex justify-center opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out fade-in">
            <div className="animate-float">
              <ArrowDown className="w-12 h-12 text-white/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-zinc-900" ref={featuresRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Speed Section */}
            <div className="group p-8 bg-black rounded-2xl card-hover opacity-0 translate-y-10 transition-all duration-700 fade-in">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">Speed</h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">Launch in under 30 days. Time is leverage.</p>
            </div>

            {/* Cost-Efficiency Section */}
            <div className="group p-8 bg-black rounded-2xl card-hover opacity-0 translate-y-10 transition-all duration-700 fade-in">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <PiggyBank className="w-6 h-6 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">Cost-Efficiency</h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">Half the price, twice the value.</p>
            </div>

            {/* Performance Section */}
            <div className="group p-8 bg-black rounded-2xl card-hover opacity-0 translate-y-10 transition-all duration-700 fade-in">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">Performance</h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">Built to convert, designed to grow.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Builds Section */}
      <div className="bg-black" ref={platformsRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          {/* Section Header */}
          <div className="text-center mb-20 md:mb-28">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out fade-in tracking-tight">
              Recent <span className="gradient-text">Builds</span>
            </h2>
            
            <p className="text-gray-200 max-w-2xl mx-auto text-lg opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out fade-in leading-relaxed">
              Innovative digital solutions that take businesses further—check out my latest projects.
            </p>
          </div>
          
          {/* Platforms Grid with equal height cells */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-0 md:px-4">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div 
                  key={index} 
                  className="group opacity-0 translate-y-10 transition-all duration-700 fade-in h-full"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Card with fixed height and consistent styling */}
                  <div 
                    className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:translate-y-[-6px] group-hover:shadow-xl group-hover:shadow-white/5 group-hover:border-zinc-700 h-full flex flex-col"
                  >
                    {/* Card header with accent color */}
                    <div className="h-1 bg-white"></div>
                    
                    {/* Card content with flex column layout for equal distribution */}
                    <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col">
                      {/* Top row with icon and badges */}
                      <div className="flex justify-between items-start mb-8">
                        {/* Icon with consistent styling */}
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors duration-300">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          
                          {/* Category with better contrast */}
                          <span className="text-sm text-gray-300 font-medium px-3 py-1 bg-zinc-800/50 rounded-full">
                            {platform.category}
                          </span>
                        </div>
                        
                        {/* Featured badge with better visibility */}
                        {platform.featured && (
                          <div className="flex items-center text-xs font-medium text-amber-200 px-3 py-1.5 bg-amber-950/30 rounded-full border border-amber-800/20">
                            <Star className="w-3.5 h-3.5 mr-1.5 fill-amber-200 text-amber-200" />
                            Featured
                          </div>
                        )}
                      </div>
                      
                      {/* Platform name and tagline with improved typography */}
                      <div className="mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white leading-tight group-hover:text-white transition-colors duration-300">
                          {platform.name}
                        </h3>
                        <p className="text-base md:text-lg text-gray-200 font-medium leading-relaxed">
                          {platform.tagline}
                        </p>
                      </div>
                      
                      {/* Description with better readability and flex-grow to push button to bottom */}
                      <div className="flex-grow">
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {platform.description}
                        </p>
                      </div>
                      
                      {/* Visit button with consistent positioning at bottom - only shown if URL exists */}
                      {platform.url && (
                        <div className="mt-10">
                          <a 
                            href={platform.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-zinc-900"
                            aria-label={`Visit ${platform.name} website`}
                          >
                            Visit Site
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center opacity-0 translate-y-10 transition-all duration-1000 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Let's build something that works.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
