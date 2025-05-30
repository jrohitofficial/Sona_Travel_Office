import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  error,
  icon,
  className = '',
  containerClassName = '',
  labelClassName = '',
  required = false,
  disabled = false,
  ...props
}) => {
  const inputId = id || name;
  
  return (
    <div className={`mb-4 ${containerClassName}`}>
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
        <input
          type={type}
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-4 py-3 bg-[#f5f5f5] rounded-xl text-lg font-semibold ${
            error ? 'border border-red-500' : ''
          } ${icon ? 'pr-10' : ''} ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${className}`}
          {...props}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

export default InputField;