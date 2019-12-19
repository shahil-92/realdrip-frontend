import React from 'react';
import PropTypes from 'prop-types';

const SMALL_CARD = (props) => {
  const { wrapperClass, src, heading, count,innerWrapClass } = props
  return (
    <div className={wrapperClass}>
        <div className={innerWrapClass}>
            <span className="urgnt_txt">{count}</span>
            <span className="drip_img_wrap"><img src={src} /></span>
        </div>
        <h5>{heading}</h5>
    </div>
  );
};

SMALL_CARD.propTypes = {
    wrapperClass: PropTypes.string,
    heading: PropTypes.string,
    innerWrapClass: PropTypes.string,
    count: PropTypes.string,
    src: PropTypes.string
};

export default SMALL_CARD;