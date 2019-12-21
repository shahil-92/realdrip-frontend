// import React from 'react';
import PropTypes from 'prop-types';

import React, { useState } from 'react';

function DashboardOperationWrap(props) {
  console.log('==props==',props)
  const [count, setCount] = useState(0);
  const {wardInfusion, wardNurse} = props;
  const activeNurseList = (data) => {
      console.log('===data==',data)
        return data && data.map((data)=>{
        return(
            <ul className="list_heading_ul ul_contnt active_dsh_list bottom">    
            <li>
                <div className="user_img_nme_wrap">
                <img class="user_img" src={require('../../assets/Images/user.png')}></img>
                <span>{data.name}</span>
                </div>    
            </li>
            <li>
                <div className="time_in_second bld_txt time_btm">Frank Joseph</div>
            </li>
            <li>
                <div className="time_only time_btm">12:23pm</div>
            </li>
        </ul>
        )
        })
   }
  
  const activeInfusionList = (data) => {
       console.log('===ddd=',data)
        return data && data.map((data)=>{
        return(
            <ul className="list_heading_ul ul_contnt active_dsh_list" onClick={()=>this.handleRedirectClick()}>    
                <li>
                <div className="bld_prcnt">{data.startVolume}%</div>
                <div className="wrapper_progress_bar"><div className="inner_progress_bar"></div></div>
                <div className="bld_txt">Blood</div>
                </li>
                <li>
                <div className="time_in_second bld_txt">00:13:00</div>
                <div className="time_only">12:23pm</div>
                </li>
                <li>
                <div className="speed_hr"> <span> 28 </span> <img class="speed_up" src={require('../../assets/Images/dummy_logo.jpg')}></img></div>
                <div className="speed_unit bld_txt">ml/hr</div>
                </li>
                <li>
                <div className="infusn_usr_img"><img src={require('../../assets/Images/user.png')}></img></div>
                <div className="infusn_usr_name">Titlayo Olaide</div>
                </li>
                <li>
                <div className="infusn_usr_fname">Frank</div>
                <div className="infusn_disease_name">Malaria</div>
                </li>
            </ul>
        )
        })
   }

  return (
    <div className="right-wrap-heading"> 
        <div className="infusion_wrap">
            <h4 class="sumry_head2">Active Infusion</h4>
            <span class="see_all_txt">see all</span>
        </div>
        <div class="dash_active_wrap">
            <ul className="list_heading_ul">
                <li>Volume</li>
                <li>Countdown</li>
                <li>Flowerate</li>
                <li>Nurse</li>
                <li>Patient Case</li>
            </ul>
            {wardInfusion && activeInfusionList(wardInfusion)}
        </div>
        <div className="infusion_wrap bottom">
            <h4 class="sumry_head2">Active Nurses</h4>
            <span class="see_all_txt">see all</span>
        </div>
        <div className="active_dsh_list">    
            {wardNurse && activeNurseList(wardNurse)}
        </div>
    </div>
  );
}

// DashboardOperationWrap.propTypes = {
//     wrapperClass: PropTypes.string,
//     heading: PropTypes.string,
//     subHeading: PropTypes.string,
//     count: PropTypes.string,
//     text: PropTypes.string
// };

export default DashboardOperationWrap;