import React from 'react';
import PropTypes from 'prop-types';

const WifiiAvailableNetworks = (props) => {
  const {leftIconSrc, text, rightIconSrc } = props
  return (
    <div className="wifii_tr_wrap">
        <div className="wifii_td_icon_name">
            <img src={leftIconSrc} />
            <span className="wifii_text_contnt">{text}</span>
        </div>
        <div className="wifii_td_icon">
        <img src={rightIconSrc} />
        </div>
    </div>
  );
};

WifiiAvailableNetworks.propTypes = {
    leftIconSrc: PropTypes.string,
    text: PropTypes.string,
    rightIconSrc: PropTypes.string,
};

export default WifiiAvailableNetworks;