import React from 'react';
import Card from '../../components/common/Card';

const TrendingOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'UNLOCK A YEAR OF',
      subtitle: 'SAVINGS',
      discount: 'Up To 10% Discount',
      promoCode: 'Sona12345',
      image: '/images/img_modernbusistransportingpassengersmountainswithsunsetholidaybannergenerativeai69969036051.png'
    },
    {
      id: 2,
      title: 'Maha Shivrati',
      subtitle: 'Festival',
      discount: '20% Discount',
      promoCode: 'Sona12345',
      image: '/images/img_modernbusistransportingpassengersmountainswithsunsetholidaygenerativeai69969036093_1.png'
    },
    {
      id: 3,
      title: 'Maha Shivrati',
      subtitle: 'Festival',
      discount: '20% Discount',
      promoCode: 'Sona12345',
      image: '/images/img_shanghaistreetviewwithcityscape135921_1.png'
    }
  ];

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#3d3d3d] mb-2">Trending Offers for You</h2>
          <p className="text-2xl text-[#5f5f5f]">
            Explore the Latest Discounts and Special Deals Tailored Just for You. Don't Miss Out on Amazing Savings for Your Next Journey!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              type="offer"
              title={offer.title}
              subtitle={offer.subtitle}
              discount={offer.discount}
              promoCode={offer.promoCode}
              image={offer.image}
            />
          ))}
        </div>
        
        <div className="mt-8">
          <a href="#" className="flex items-center text-xl font-bold text-[#5f5f5f]">
            View all
            <img 
              src="/images/img_hicon_linear_right_1.svg" 
              alt="Right Arrow" 
              className="w-6 h-6 ml-2"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingOffers;