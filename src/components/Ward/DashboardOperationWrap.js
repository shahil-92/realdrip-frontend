// import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
  
function DashboardOperationWrap(props) {
  console.log('==props==',props)
  const [count, setCount] = useState(0);
  const {wardInfusion, wardNurse} = props;
  const activeNurseList = (data) => {
      console.log('===data==',data)
        return ['1','2','3'].map((data)=>{
        return(
        <tr className="list_heading_ul ul_contnt active_dsh_list bottom">    
            <td>
                <div className="user_img_nme_wrap">
                    <img class="user_img" src={require('../../assets/Images/user_round_man.png')}></img>
                    <span>Shubham</span>
                </div>    
            </td>
            <td>
                <div className="time_in_second bld_txt">Frank Joseph</div>
            </td>
            <td>
                <div className="time_only time_btm">12:23pm</div>
            </td>
        </tr>
        )
        })
   }

   const handleRedirectClick = () =>{
    props.history.push('/operation-detail')
  }
  const activeInfusionList = (data) => {
       console.log('===ddd= ',data)
        return ['1','2','3'].map((data, key)=>{
        return(
            <tr className={(key === 0 ) ? "list_heading_ul ul_contnt active_dsh_list" : "list_heading_ul ul_contnt"} onClick={()=>handleRedirectClick()}>    
                <td>
                <div className="bld_prcnt">89%</div>
                <ProgressBar>
                    <ProgressBar variant="warning" now={50} key={2} />
                </ProgressBar>
                <div className="bld_txt">Blood</div>
                </td>
                <td>
                <div className="time_in_second bld_txt">00:13:00</div>
                <div className="time_only">12:23pm</div>
                </td>
                <td>
                <div className="speed_hr"> <span> 28 </span> <img class="speed_up" src={require('../../assets/Images/dummy_logo.jpg')}></img></div>
                <div className="speed_unit bld_txt">ml/hr</div>
                </td>
                <td>
                <div className="infusn_usr_img"><img src={require('../../assets/Images/nurse.svg')}></img></div>
                <div className="infusn_usr_name">Titlayo Olaide</div>
                </td>
                <td>
                <div className="infusn_usr_fname">Frank</div>
                <div className="infusn_disease_name">Malaria</div>
                </td>
            </tr>
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
        <Table responsive>
            <thead>
            <tr className="list_heading_ul dhabord-ul-heading">
                <td>Volume</td>
                <td>Countdown</td>
                <td>Flowerate</td>
                <td>Nurse</td>
                <td>Patient Case</td>
            </tr>
            </thead>
            <tbody>
            {activeInfusionList()}
            </tbody>
            </Table>
        </div>
        <div className="infusion_wrap bottom">
            <h4 class="sumry_head2">Active Nurses</h4>
            <span class="see_all_txt">see all</span>
        </div>
        <div className="active_dsh_list">
        <Table responsive>
            <tbody>    
            {activeNurseList()}
            </tbody>
            </Table>
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