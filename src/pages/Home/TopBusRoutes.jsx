import React from 'react';
import Card from '../../components/common/Card';

const TopBusRoutes = () => {
  const routes = [
    {
      id: 1,
      title: 'Birgunj to Kathmandu',
      offerType: "Today\'s Offer",
      price: 'R.s 1500.00',
      image: '/images/img_bestplacestovsitinkathmandunepal71683x1024_1.png'
    },
    {
      id: 2,
      title: 'Kathmandu to Birgunj',
      offerType: "Holiday\'s Offer",
      price: 'R.s 1500.00',
      image: '/images/img_bestplacestovsitinkathmandunepal71683x1024_1_487x388.png'
    },
    {
      id: 3,
      title: 'Kathmandu to Pokhara',
      offerType: "Weekend\'s Offer",
      price: 'R.s 1500.00',
      image: '/images/img_bestplacestovsitinkathmandunepal71683x1024_1_1.png'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-[#3d3d3d] mb-2">Top Bus Routes This Month</h2>
            <p className="text-2xl text-[#5f5f5f]">
              Discover the most popular routes and start planning your next adventure!
            </p>
          </div>
          
          <a href="#" className="flex items-center text-xl font-bold text-[#5f5f5f]">
            View all
            <img 
              src="/images/img_hicon_linear_right_1.svg" 
              alt="Right Arrow" 
              className="w-6 h-6 ml-2"
            />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => (
            <Card
              key={route.id}
              type="route"
              title={route.title}
              offerType={route.offerType}
              price={route.price}
              image={route.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBusRoutes;