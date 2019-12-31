import React from 'react';
import { Link } from 'react-router-dom';

const DETAILMENU = (props) => {
  const {headerName} = props
  return (
    <div className="second_menu_wrap">
        <ul>
            <Link to="/ward-dashboard"><li>Home</li></Link>
            <Link to="/ward-operation"><li>Operations</li></Link>
            <Link to="/ward-device"><li>Devices</li></Link>
            <Link to="/ward-nurse"><li>Nurses</li></Link>
            <Link to="/ward-setting"><li>Account</li></Link>
        </ul>
        <ul>
            <li>Sign Out</li>
        </ul>
    </div>
  );
};
 
export default DETAILMENU;
