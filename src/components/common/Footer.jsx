import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#ececec] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/images/img_logo_with_name_png_2.png" 
              alt="Sona Travel & Tours Logo" 
              className="h-[182px] w-[145px] object-contain mb-12"
            />
            <p className="text-[#3d3d3d] text-base font-semibold text-center md:text-left mb-4">
              info@sonatraveltours.com
            </p>
            <p className="text-[#3d3d3d] text-base font-semibold mb-12">
              (+977)9845122260 (+977)9845230101
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon">
                <img src="/images/img_group.png" alt="Social Media" className="w-6 h-6" />
              </a>
              <a href="#" className="social-icon">
                <img src="/images/img_icbaselinetiktok.svg" alt="TikTok" className="w-6 h-6" />
              </a>
              <a href="#" className="social-icon">
                <img src="/images/img_group_blue_800.svg" alt="Social Media" className="w-6 h-6" />
              </a>
              <a href="#" className="social-icon">
                <img src="/images/img_icomoonfreebehance2.svg" alt="Behance" className="w-6 h-6" />
              </a>
              <a href="#" className="social-icon">
                <img src="/images/img_group_blue_500.svg" alt="Social Media" className="w-6 h-6" />
              </a>
              <a href="#" className="social-icon">
                <img src="/images/img_logosfacebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-[#3d3d3d] text-[28px] font-bold mb-8">Information</h3>
            <ul className="space-y-6">
              <li>
                <Link to="/terms" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Transportation */}
          <div>
            <h3 className="text-[#3d3d3d] text-[28px] font-bold mb-8">Transportation</h3>
            <ul className="space-y-6">
              <li>
                <Link to="/bookings" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link to="/routes" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  Bus Routes
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link to="/live-track" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  Live Track
                </Link>
              </li>
            </ul>
          </div>

          {/* Hotel & Tours */}
          <div>
            <h3 className="text-[#3d3d3d] text-[28px] font-bold mb-8">Hotel & Tours</h3>
            <ul className="space-y-6">
              <li>
                <Link to="/hotels" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-[#5f5f5f] text-lg font-semibold hover:text-[#0a639d]">
                  Tours
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;