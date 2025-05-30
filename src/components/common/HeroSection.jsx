import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative h-[771px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/img_busroadgenerativeai22087319731_1.png" 
          alt="Bus on Road" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-xl">
          <h1 className="mb-8">
            <span className="text-[32px] font-semibold text-[#3d3d3d] font-['Open_Sans'] block">
              The Easiest Way to Book your 
            </span>
            <span className="text-[40px] font-bold text-[#3d3d3d] font-['Oleo_Script']">
              Bus Ticket
            </span>
            <span className="text-[40px] font-bold text-[#5f5f5f] font-['Oleo_Script']"> with</span>
          </h1>

          <div className="mb-16">
            <span className="text-[80px] font-bold text-[#ff8f1f] font-['Oleo_Script'] leading-tight">Sona</span>
            <span className="text-[60px] font-bold text-[#0a639d] font-['Oleo_Script'] leading-tight"> Travel</span>
            <div className="text-[60px] font-bold text-[#0a639d] font-['Oleo_Script'] leading-tight">&amp; Tours</div>
          </div>

          {/* Tab Buttons */}
          <div className="flex space-x-3 mb-4">
            <Button 
              className="h-[68px] w-[120px] rounded-lg bg-[#0a639d] flex items-center justify-center"
            >
              <span className="text-2xl font-semibold text-white">Bus</span>
            </Button>
            <Button 
              className="h-[68px] w-[120px] rounded-lg bg-[#ececec] flex items-center justify-center"
              variant="secondary"
            >
              <span className="text-2xl font-semibold text-[#b0b0b0]">Flight</span>
            </Button>
            <Button 
              className="h-[68px] w-[120px] rounded-lg bg-[#ececec] flex items-center justify-center"
              variant="secondary"
            >
              <span className="text-2xl font-semibold text-[#b0b0b0]">Hotel</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;