import React from 'react';
import PropTypes from 'prop-types';

const POPUP = (props) => {
  const {src, title, subHeading, children, subHeadingClass,titleClass } = props
  return (
    <div className="popup-wrap">
        <div class="pop-container">
        <div className="circle_wrap"><img src={src} /></div>
        <h4 className={titleClass}>{title}</h4>
        <div className={subHeadingClass}>{subHeading}</div>
        {children}
        </div>
    </div>
  );
};

POPUP.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  subHeading: PropTypes.string,
  titleClass: PropTypes.string,
  subHeadingClass: PropTypes.string
};

export default POPUP;
