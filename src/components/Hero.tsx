import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/cattle-banner.jpg"
          alt="Cattle herd at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-western text-white mb-6 animate-fade-in">
            CALDWELL LAND + CATTLE CO
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in-delay font-western">
            Est. 1939 • Sweetwater, TX
          </p>
          <a
            href="#shop"
            className="inline-block bg-white/90 text-gray-900 px-8 py-3 rounded-md hover:bg-white transition-colors animate-fade-in-delay-2 font-western"
          >
            Shop Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;