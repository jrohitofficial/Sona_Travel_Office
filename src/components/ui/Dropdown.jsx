import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  name,
  id,
  error,
  className = '',
  containerClassName = '',
  labelClassName = '',
  required = false,
  disabled = false,
  icon,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const inputId = id || name;
  
  const selectedOption = options.find(option => option.value === value);
  
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  
  const handleOptionSelect = (option) => {
    onChange({ target: { name, value: option.value } });
    setIsOpen(false);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className={`mb-4 ${containerClassName}`} ref={dropdownRef}>
      {label && (
        <label 
          htmlFor={inputId} 
          className={`block text-[#5f5f5f] font-bold text-2xl mb-2 ${labelClassName}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          id={inputId}
          onClick={toggleDropdown}
          disabled={disabled}
          className={`w-full px-4 py-3 bg-[#f5f5f5] rounded-xl text-lg font-semibold text-left flex justify-between items-center ${
            error ? 'border border-red-500' : ''
          } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
          {...props}
        >
          <span className={selectedOption ? 'text-[#5f5f5f]' : 'text-[#d9d9d9]'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {icon || (
            <svg 
              className="w-6 h-6 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          )}
        </button>
        
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
            <ul className="py-1">
              {options.map((option) => (
                <li 
                  key={option.value}
                  onClick={() => handleOptionSelect(option)}
                  className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node
};

export default Dropdown;