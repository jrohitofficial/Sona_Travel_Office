import React from 'react';

const ServiceHighlights = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Background Image */}
          <div className="lg:w-1/2 h-[700px] relative rounded-tr-2xl rounded-br-2xl overflow-hidden">
            <img 
              src="/images/img_beautifullandscapetouristbustraveltransportbackground87582536524.png" 
              alt="Tourist Bus Landscape" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right Side - Content */}
          <div className="lg:w-1/2 bg-white p-8 lg:p-12 rounded-2xl lg:-ml-8 mt-8 lg:mt-0 z-10">
            <h2 className="text-4xl font-bold text-[#3d3d3d] mb-12">
              Experience the Difference with Our Service!
            </h2>
            
            {/* Service 1 */}
            <div className="flex mb-12">
              <div className="bg-[#ececec] rounded-full w-[98px] h-[98px] flex items-center justify-center flex-shrink-0">
                <img 
                  src="/images/img_eosiconsserviceoutlined.svg" 
                  alt="Service Icon" 
                  className="w-[62px] h-[62px]"
                />
              </div>
              <div className="ml-8">
                <h3 className="text-[28px] font-bold text-[#3d3d3d] mb-2">
                  Exceptional Service
                </h3>
                <p className="text-xl text-[#3d3d3d] leading-8">
                  Experience unparalleled customer support and a seamless booking process every time.
                </p>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="flex mb-12">
              <div className="bg-[#ececec] rounded-full w-[98px] h-[98px] flex items-center justify-center flex-shrink-0">
                <img 
                  src="/images/img_solartagpricelinear.svg" 
                  alt="Price Icon" 
                  className="w-[62px] h-[62px]"
                />
              </div>
              <div className="ml-8">
                <h3 className="text-[28px] font-bold text-[#3d3d3d] mb-2">
                  Affordable Prices
                </h3>
                <p className="text-xl text-[#3d3d3d] leading-8">
                  Enjoy competitive rates and exclusive discounts on all your travel needs.
                </p>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="flex">
              <div className="bg-[#ececec] rounded-full w-[98px] h-[98px] flex items-center justify-center flex-shrink-0">
                <img 
                  src="/images/img_tdesignsleep.svg" 
                  alt="Comfort Icon" 
                  className="w-[62px] h-[62px]"
                />
              </div>
              <div className="ml-8">
                <h3 className="text-[28px] font-bold text-[#3d3d3d] mb-2">
                  Comfortable Travel
                </h3>
                <p className="text-xl text-[#3d3d3d] leading-8">
                  Travel in comfort with our modern and well-maintained fleet of buses.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking Stats */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center">
          <div className="bg-[#fff4e9] rounded-2xl p-8 shadow-lg shadow-[#0a639d4c] flex items-center mb-8 md:mb-0 md:mr-8">
            <div className="bg-[#ff8f1f] rounded-full w-[98px] h-[98px] flex items-center justify-center mr-8">
              <img 
                src="/images/img_hugeiconsticket02.svg" 
                alt="Ticket Icon" 
                className="w-[62px] h-[62px]"
              />
            </div>
            <h3 className="text-3xl font-bold text-[#b36416]">15,340 Bookings</h3>
          </div>
          
          <div className="bg-[#fff4e9] rounded-2xl p-6 shadow-lg shadow-[#0a639d4c] max-w-md">
            <p className="text-xl font-semibold text-[#b36416] leading-8">
              Join thousands of satisfied travelers who have booked their journeys with us!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;