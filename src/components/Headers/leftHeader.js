import React from 'react';
import { Link } from 'react-router-dom';

const LEFT_HEADER = (props) => {
  const {onClick} = props
  return (
    <div className="left_dashboard">
        <div className="inner_left_dashboard">
        <div className="logo"> 
            <img className="hamburger_btn" src={require('../../assets/Images/sort-button-with-three-lines.svg')} onClick={onClick}/>
        </div>
        <ul className="menu_wrap">
            <Link to="/ward-dashboard" ><li><img src={require('../../assets/Images/menu1_active.png')} /> </li></Link>
            <Link to="/ward-operation"><li><img src={require('../../assets/Images/menu4.png')} /></li></Link>
            <Link to="/ward-device"><li><img src={require('../../assets/Images/menu2.png')} /></li></Link>
            <Link to="/ward-nurse"><li><img src={require('../../assets/Images/menu5.png')} /></li></Link>
            <Link to="/ward-setting"><li><img src={require('../../assets/Images/menu3.png')} /></li></Link>
        </ul>
        </div>
    </div>
  );
};

export default LEFT_HEADER;
