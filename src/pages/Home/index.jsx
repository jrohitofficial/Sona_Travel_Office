import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import SearchForm from './SearchForm';
import NowBookingSection from './NowBookingSection';
import BookingSteps from './BookingSteps';
import TopBusRoutes from './TopBusRoutes';
import TrendingOffers from './TrendingOffers';
import ServiceHighlights from './ServiceHighlights';
import AppPromotion from './AppPromotion';
import PaymentMethods from './PaymentMethods';

const HomePage = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <SearchForm />
        <NowBookingSection />
        <BookingSteps />
        <TopBusRoutes />
        <TrendingOffers />
        <ServiceHighlights />
        <AppPromotion />
        <PaymentMethods />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;