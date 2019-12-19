import React from 'react';
import PropTypes from 'prop-types';

const REDCARD = (props) => {
  const {wrapperClass, text, heading, count,subHeading } = props
  return (
    <div className={wrapperClass}>
        <div className="urgnt_row">
            <span className="urgnt_txt_red">{heading}</span>
            <span className="drip_img_wrap"><i class="fa fa-bell cstm_bell"></i></span>
        </div>
        <div className="urgnt_number_wrap">
            <span className="cirlcle_dot"></span>
            <span className="number_txt_white">{count}</span>
        </div>
        <div align="center">
            <h5>{subHeading}</h5>
            <span>{text}</span>
        </div>
  </div>
  );
};

REDCARD.propTypes = {
    wrapperClass: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    count: PropTypes.string,
    text: PropTypes.string
};

export default REDCARD;