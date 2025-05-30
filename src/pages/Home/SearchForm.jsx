import React, { useState } from 'react';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';

const SearchForm = () => {
  const [tripType, setTripType] = useState('oneWay');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: ''
  });

  const handleTripTypeChange = (type) => {
    setTripType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSearch = () => {
    console.log('Search with data:', { tripType, ...formData });
    // Implement search functionality
  };

  const handleSwapLocations = () => {
    setFormData({
      ...formData,
      from: formData.to,
      to: formData.from
    });
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md w-full max-w-5xl mx-auto -mt-16 relative z-20">
      {/* Trip Type Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#ececec] rounded-2xl flex w-[300px] h-[68px]">
          <button
            className={`w-1/2 h-full rounded-2xl flex items-center justify-center font-bold text-xl ${
              tripType === 'oneWay' ?'bg-[#0a639d] text-white' :'text-[#5f5f5f]'
            }`}
            onClick={() => handleTripTypeChange('oneWay')}
          >
            One Way
          </button>
          <button
            className={`w-1/2 h-full rounded-2xl flex items-center justify-center font-bold text-xl ${
              tripType === 'twoWay' ?'bg-[#0a639d] text-white' :'text-[#5f5f5f]'
            }`}
            onClick={() => handleTripTypeChange('twoWay')}
          >
            Two Ways
          </button>
        </div>
      </div>

      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <InputField
            label="From"
            name="from"
            value={formData.from}
            onChange={handleInputChange}
            placeholder="Select your boarding place"
            icon={
              <img 
                src="/images/img_hicon_linear_down_2.svg" 
                alt="Down Arrow" 
                className="w-6 h-6"
              />
            }
          />
        </div>

        {/* Swap Button */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 md:block hidden">
          <button 
            onClick={handleSwapLocations}
            className="bg-white rounded-full p-2 shadow-md"
          >
            <img 
              src="/images/img_hicon_linear_arrow_swap_horizontal.svg" 
              alt="Swap" 
              className="w-12 h-12"
            />
          </button>
        </div>

        <div>
          <InputField
            label="To"
            name="to"
            value={formData.to}
            onChange={handleInputChange}
            placeholder="Select your boarding place"
            icon={
              <img 
                src="/images/img_hicon_linear_down_2.svg" 
                alt="Down Arrow" 
                className="w-6 h-6"
              />
            }
          />
        </div>

        <div>
          <InputField
            label="Date"
            name="date"
            type="text"
            value={formData.date}
            onChange={handleInputChange}
            placeholder="Select departure date"
            icon={
              <img 
                src="/images/img_hicon_linear_down_2.svg" 
                alt="Down Arrow" 
                className="w-6 h-6"
              />
            }
          />
        </div>

        <div className="flex items-end">
          <Button 
            onClick={handleSearch}
            className="bg-[#0a639d] h-[80px] w-full rounded-xl flex items-center justify-center"
          >
            <img 
              src="/images/img_hicon_outline_search_1.svg" 
              alt="Search" 
              className="w-7 h-7 mr-2"
            />
            <span className="text-2xl font-bold">Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;