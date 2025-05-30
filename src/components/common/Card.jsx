import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

const Card = ({ 
  type = 'booking', 
  title,
  subtitle,
  price,
  image,
  destination,
  origin,
  offerType,
  discount,
  promoCode,
  onClick,
  className = ''
}) => {
  // Booking Card
  if (type === 'booking') {
    return (
      <div className={`bg-white rounded-2xl p-6 ${className}`}>
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#3d3d3d]">{origin}</h3>
                <p className="text-lg font-semibold text-[#8f8f8f]">{subtitle}</p>
              </div>
              
              <div className="flex items-center">
                <div className="h-[30px] w-[2px] bg-gray-300"></div>
                <img 
                  src="/images/img_group_red_300.svg" 
                  alt="Direction" 
                  className="mx-2 w-6 h-6"
                />
                <div className="h-[30px] w-[2px] bg-gray-300"></div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#3d3d3d]">{destination}</h3>
                <p className="text-lg font-semibold text-[#8f8f8f]">Bus Park</p>
              </div>
            </div>
          </div>
          
          <div className="mt-auto flex justify-between items-center">
            <p className="text-2xl font-bold text-[#3d3d3d]">{price}</p>
            <Button 
              className="h-[60px] bg-[#0a639d] rounded-xl flex items-center"
              onClick={onClick}
            >
              <img 
                src="/images/img_hicon_outline_bookmark_3.svg" 
                alt="Bookmark" 
                className="w-6 h-6 mr-2"
              />
              <span className="text-xl font-bold">Book Now</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  // Route Card
  if (type === 'route') {
    return (
      <div className={`bg-white rounded-2xl shadow-md overflow-hidden ${className}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-[388px] object-cover"
          />
          <button className="absolute top-4 right-4 bg-white p-1 rounded-full">
            <img 
              src="/images/img_hicon_linear_heart_2.svg" 
              alt="Favorite" 
              className="w-[30px] h-[30px]"
            />
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-[28px] font-bold text-[#3d3d3d]">{title}</h3>
          <p className="text-xl font-semibold text-[#5f5f5f] mb-1">{offerType}</p>
          <p className="text-xl font-semibold text-[#5f5f5f]">
            Start from <span className="text-[28px] font-bold text-[#0a639d]">{price}</span>
          </p>
        </div>
      </div>
    );
  }
  
  // Offer Card
  if (type === 'offer') {
    return (
      <div className={`bg-white rounded-2xl overflow-hidden ${className}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-[240px] object-cover"
          />
          {discount && (
            <div className="absolute top-4 left-4">
              <img 
                src="/images/img_lettering_discount_up_to_seventy_percent_gift_text.png" 
                alt="Discount" 
                className="w-[38px] h-[36px]"
              />
            </div>
          )}
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-3xl font-bold">{subtitle}</p>
            <p className="text-lg font-bold text-white mt-2">{discount}</p>
            
            {promoCode && (
              <div className="mt-4 bg-[#fff4e9] rounded-xl p-4 flex justify-between items-center">
                <p className="text-xl font-bold text-[#b36416]">
                  Promo Code: <br />
                  {promoCode}
                </p>
                <img 
                  src="/images/img_tablercopy.svg" 
                  alt="Copy" 
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  return null;
};

Card.propTypes = {
  type: PropTypes.oneOf(['booking', 'route', 'offer']),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  destination: PropTypes.string,
  origin: PropTypes.string,
  offerType: PropTypes.string,
  discount: PropTypes.string,
  promoCode: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Card;