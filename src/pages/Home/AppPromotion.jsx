import React from 'react';

const AppPromotion = () => {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-[28px] font-bold text-[#3d3d3d] mb-4">
              Smart Travel Starts Here!
            </h2>
            <p className="text-xl font-semibold text-[#5f5f5f] leading-relaxed mb-8">
              Experience seamless booking, exclusive offers, real-time updates, and 24/7 support. 
              <br />Download the <img 
                src="/images/img_logo_with_name_png_1.png" 
                alt="Sona Travel" 
                className="inline-block h-[37px] mx-2"
              /> app and make every journey smarter!
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="block">
                <img 
                  src="/images/img_70ic901408727_2.png" 
                  alt="App Store" 
                  className="h-16"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="/images/img_70ic901408727_1.png" 
                  alt="Google Play" 
                  className="h-16"
                />
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2">
            <img 
              src="/images/img_iphone_15_pro.png" 
              alt="App Screenshot" 
              className="max-w-full h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;