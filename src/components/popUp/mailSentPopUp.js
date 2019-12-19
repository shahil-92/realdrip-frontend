import React from 'react';
import PropTypes from 'prop-types';

const MAILSENT_POPUP = (props) => {
  const {src, title, subHeading,subHeadingWithImg, children, subHeadingClass } = props
  return (
        <div className="popup-wrap">
         <div class="pop-container">
            <div className="circle_wrap"><img src={src} /></div>
            <h4 className="mail-sent-wrap">{title}</h4>
            {subHeadingWithImg && <div className="recovr-mail-sent-wrap"><h4 className="mail-sent-wrap">{subHeadingWithImg}</h4><img className="img-green-recovry" src={require('../../assets/Images/circle-with-check-symbol-green.svg')} /></div>}
            {subHeading && <div className={subHeadingClass}>{subHeading}</div>}
            {children}
         </div>
        </div>
  );
};

MAILSENT_POPUP.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  subHeading: PropTypes.string,
  subHeadingWithImg: PropTypes.string,
  subHeadingClass: PropTypes.string
};

export default MAILSENT_POPUP;