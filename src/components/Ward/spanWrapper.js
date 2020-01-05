import React from 'react';
import PropTypes from 'prop-types';
 
const SPAN_WRAPPER = (props) => {
  const { wrapperClass, spanClassName, childWrapClass, spanText,children } = props
  return (
    <div className={wrapperClass}>
        <span class={spanClassName}>{spanText}</span>
        <span className={childWrapClass}>{children}</span>
    </div>
  );
};

SPAN_WRAPPER.propTypes = {
    wrapperClass: PropTypes.string,
    spanClassName: PropTypes.string,
    spanText: PropTypes.string,
    childWrapClass: PropTypes.string,
    children: PropTypes.string
};

export default SPAN_WRAPPER;