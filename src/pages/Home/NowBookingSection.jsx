import React from 'react';
import Card from '../../components/common/Card';

const NowBookingSection = () => {
  const bookings = [
    {
      id: 1,
      origin: 'Kathmandu',
      subtitle: 'Swayambhu',
      destination: 'Birgunj',
      price: 'Rs. 2000.00'
    },
    {
      id: 2,
      origin: 'Kathmandu',
      subtitle: 'Swayambhu',
      destination: 'Birgunj',
      price: 'Rs. 2000.00'
    },
    {
      id: 3,
      origin: 'Kathmandu',
      subtitle: 'Swayambhu',
      destination: 'Birgunj',
      price: 'Rs. 2000.00'
    },
    {
      id: 4,
      origin: 'Kathmandu',
      subtitle: 'Swayambhu',
      destination: 'Birgunj',
      price: 'Rs. 2000.00'
    }
  ];

  const handleBookNow = (id) => {
    console.log(`Booking ticket for route ID: ${id}`);
    // Implement booking functionality
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#3d3d3d] mb-8">Now Booking</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookings.map((booking) => (
            <Card
              key={booking.id}
              type="booking"
              origin={booking.origin}
              subtitle={booking.subtitle}
              destination={booking.destination}
              price={booking.price}
              onClick={() => handleBookNow(booking.id)}
              className="h-[178px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NowBookingSection;