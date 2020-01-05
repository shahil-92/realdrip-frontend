import React from 'react';
import { Link } from 'react-router-dom';

const DETAILMENU = (props) => {
  const {LEFT_HEADER_DATA} = props
  return (
    <div className="second_menu_wrap">
        <ul>
        {LEFT_HEADER_DATA.map((data)=>{
            return(
                   <Link to={data.url}><li>{data.iconName}</li></Link>
                )
            })}
        </ul>
        <ul>
            <li>Sign Out</li>
        </ul>
    </div>
  );
};
 
export default DETAILMENU;
