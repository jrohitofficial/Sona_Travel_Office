import React from 'react';

const PaymentMethods = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[28px] font-bold text-[#8f8f8f] mb-12">
          We Accept Methods:
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img 
            src="/images/img_8be52076054e63670dfc487ddf39ac8a_1.png" 
            alt="PayPal" 
            className="h-[85px]"
          />
          <img 
            src="/images/img_0abbf7cdb76b927242203afc7b581e30_1.png" 
            alt="Mastercard" 
            className="h-[105px]"
          />
          <img 
            src="/images/img_dc139ffdf87e0bfe4b53f1afc7126e34_1.png" 
            alt="Visa" 
            className="h-[89px]"
          />
          <img 
            src="/images/img_image_18.png" 
            alt="Payment Method" 
            className="h-[58px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;