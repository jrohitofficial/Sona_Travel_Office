import React from 'react';

const BookingSteps = () => {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#3d3d3d] text-center mb-12">
          How To Book A Bus Ticket?
        </h2>
        
        <div className="relative">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="bg-[#07456e] rounded-2xl w-[240px] h-[240px] relative mb-8 md:mb-0">
              <img 
                src="/images/img_manusinghismobilephone5341912193.png" 
                alt="Enter Trip Information" 
                className="absolute -top-16 left-2 w-[204px] h-[306px]"
              />
            </div>
            
            <div className="md:ml-12 bg-white rounded-xl p-4 md:p-8 max-w-md">
              <h3 className="text-2xl font-bold text-[#0a639d] mb-4">
                Step1. Enter Trip Information
              </h3>
              <p className="text-lg font-semibold text-[#5f5f5f] leading-relaxed">
                Select boarding & debaording place, choose departure date and 
                <span className="text-xl font-bold text-[#0a639d]"> Search</span>.
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-16">
            <div className="relative mb-8 md:mb-0">
              <img 
                src="/images/img_indianwomenwearingcasualethnicclothingusinghersmartphone862994120134.png" 
                alt="Choose The Best Match" 
                className="w-[235px] h-[348px]"
              />
              <svg className="absolute -z-10 top-10 left-0" width="240" height="306" viewBox="0 0 240 306" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="306" rx="16" fill="#07456e"/>
              </svg>
            </div>
            
            <div className="md:mr-12 bg-white rounded-xl p-4 md:p-8 max-w-md">
              <h3 className="text-2xl font-bold text-[#0a639d] mb-4">
                Step2. Choose The Best Match
              </h3>
              <p className="text-lg font-semibold text-[#5f5f5f] leading-relaxed">
                Add <span className="text-xl font-bold text-[#0a639d]">Filters</span> and 
                <span className="text-xl font-bold text-[#0a639d]"> Sort the results to find the best option according to your plan and choose one.</span>
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="flex flex-col md:flex-row items-center mb-8 md:mb-0">
              <img 
                src="/images/img_passenger_details_1.png" 
                alt="Passenger Details" 
                className="w-[178px] h-[299px] rounded-lg mr-4"
              />
              <img 
                src="/images/img_payment_details_1.png" 
                alt="Payment Details" 
                className="w-[109px] h-[410px] rounded-lg"
              />
            </div>
            
            <div className="md:ml-12 bg-white rounded-xl p-4 md:p-8 max-w-md">
              <h3 className="text-2xl font-bold text-[#0a639d] mb-4">
                Step3. Enter Information
              </h3>
              <p className="text-lg font-semibold text-[#5f5f5f] leading-relaxed">
                Choose your seat(s), passenger details, 
                <span className="text-xl font-bold text-[#0a639d]"> Payment Method</span> and 
                <span className="text-xl font-bold text-[#0a639d]"> Complete the Purchase.</span>
              </p>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="relative mb-8 md:mb-0">
              <img 
                src="/images/img_coupletakingselfiewhiletravelingbytrain232149304471.png" 
                alt="Enjoy Your Trip" 
                className="w-[188px] h-[282px] rounded-2xl"
              />
            </div>
            
            <div className="md:mr-12 bg-white rounded-xl p-4 md:p-8 max-w-md">
              <h3 className="text-2xl font-bold text-[#0a639d] mb-4">
                Step4. Enjoy Your Trip
              </h3>
              <p className="text-lg font-semibold text-[#5f5f5f] mb-4">
                Enjoy our buses' top <span className="font-bold text-[#0a639d]">Facilities:</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <img 
                    src="/images/img_hicon_linear_tick_square.svg" 
                    alt="Tick" 
                    className="w-4 h-4 mr-2"
                  />
                  <span className="text-sm font-semibold text-[#3d3d3d]">
                    Full A/C & Air Suspension
                  </span>
                </div>
                <div className="flex items-center">
                  <img 
                    src="/images/img_hicon_linear_tick_square.svg" 
                    alt="Tick" 
                    className="w-4 h-4 mr-2"
                  />
                  <span className="text-sm font-semibold text-[#3d3d3d]">
                    Multi-zone A/C
                  </span>
                </div>
                <div className="flex items-center">
                  <img 
                    src="/images/img_hicon_linear_tick_square.svg" 
                    alt="Tick" 
                    className="w-4 h-4 mr-2"
                  />
                  <span className="text-sm font-semibold text-[#3d3d3d]">
                    Heated front seats
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connecting Line */}
          <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2 h-[80%] w-[2px] bg-[#0a639d] opacity-20 z-[-1] hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;