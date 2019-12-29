import React from 'react';
import PropTypes from 'prop-types';

const ButtonWrapper = (props) => {
  const { btnWrapperClass, btnClass, btnText, onclick } = props
  return (
    <div className={btnWrapperClass} onClick={onclick}>
        <div className={btnClass}>{btnText}</div>
    </div>
  );
};

ButtonWrapper.propTypes = {
    btnWrapperClass: PropTypes.string,
    btnClass: PropTypes.string,
    btnText: PropTypes.string,
    onclick: PropTypes.string,
};

export default ButtonWrapper;