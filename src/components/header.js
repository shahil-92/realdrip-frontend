import React from 'react';

const HEADER = (props) => {
  const {headerName} = props
  return (
    <div className="header_dash">
        <div className="header_right_dash">
            <img src={require('../assets/Images/logo.png')} />
            {/* <span class="logo_hedng">RealDrip</span> */}
            <span className="ward">{headerName}</span>
        </div>
        <div className="header_left_dash">
            <span>How it works</span>
        </div>
    </div>
  );
};

export default HEADER;
