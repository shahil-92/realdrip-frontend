import React from 'react';
import { Link } from 'react-router-dom';
import * as ImageContainer from '../../utils/images'

const LEFT_HEADER = (props) => {
    const {LEFT_HEADER_DATA, onClick } = props
    return (
      <div className="left_dashboard">
        <div className="inner_left_dashboard">
        <div className="logo"> 
            <img className="hamburger_btn" src={ImageContainer.HamburgurIcon} onClick={onClick}/>
        </div>
        <ul className="menu_wrap">
        {LEFT_HEADER_DATA.map((data)=>{
            return(
                <div>
                   <Link to={data.url}><li><img src={(props.location.pathname === data.url) ? require(`../../assets/Images/${data.imageName}_active.png`) : require(`../../assets/Images/${data.imageName}.png`) } /> </li></Link>
                </div>
                )
            })}
        </ul>
        </div>
    </div>
  );
}

export default LEFT_HEADER;
