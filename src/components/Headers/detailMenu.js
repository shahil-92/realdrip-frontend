import React from 'react';

const DETAILMENU = (props) => {
  const {headerName} = props
  return (
    <div className="second_menu_wrap">
        <ul>
            <li>Home</li>
            <li>Operations</li>
            <li>Devices</li>
            <li>Nurses</li>
            <li>Account</li>
        </ul>
        <ul>
            <li>Sign Out</li>
        </ul>
    </div>
  );
};

export default DETAILMENU;
