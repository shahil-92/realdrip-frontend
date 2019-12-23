import React from 'react';
import * as ImageContainer from '../../utils/images'

const HEADER = (props) => {
  const {headerName} = props
  return (
    <div className="header_dash">
        <div className="header_right_dash">
            <img src={ImageContainer.LOGO} />
            <span className="ward">{headerName}</span>
        </div>
        <div className="header_left_dash">
            <span>How it works</span>
        </div>
    </div>
  );
};

export default HEADER;
