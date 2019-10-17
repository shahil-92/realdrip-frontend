import PropTypes from 'prop-types';
import React from 'react';

const INPUT = (props) => {
  const {
    type, className, placeholder, value, id, onChange, name, phonePrefix, disabled, onKeyPress
  } = props;
  return (
    <input
      type={name === "pincode" ? "number" : type}
      className={className}
      placeholder={placeholder}
      value={props.children}
      min="0"
      id={id}
      name={name}
      onKeyPress={onKeyPress}
      required = {true}
      onChange={
        onChange ? e => onChange(e,props) : () => console.log('input changed')
      }
      disabled={disabled}
    />
  );
};

INPUT.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default INPUT;
