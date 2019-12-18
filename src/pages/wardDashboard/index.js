import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HEADER from '../../components/header'
import DETAILMENU from '../../components/detailMenu'
export class WardDashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false
    };
  }
  componentDidMount(){
    this.props.dispatch({ type: 'WARD_NURSE'})
    this.props.dispatch({ type: 'WARD_INFUSION'})
    this.props.dispatch({ type: 'WARD_DEVICE'})
  }

  handleClick = () =>{
    this.setState({showMenu : !this.state.showMenu})
  }
  handleRedirectClick = () =>{
    this.props.history.push('/operation-detail')
 }
 activeNurseList = (data) => {
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

 activeInfusionList = (data) => {
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

  render() {
    console.log('===',this.props)
    const {wardNurse} = this.props.WardNurse
    const {wardInfusion} = this.props.WardInfusion
    return (
        <div className="main_wrapper ">
           <div className="inner_dshbrd_wrap">
            <div className="left_dashboard">
              <div className="inner_left_dashboard">
               <div className="logo" onClick={this.handleClick}><i class="fa fa-bars"></i></div>
                 <ul className="menu_wrap">
                   <Link to="/ward-dashboard" ><li><img src={require('../../assets/Images/menu1_active.png')} /> </li></Link>
                   <Link to="/ward-operation"><li><img src={require('../../assets/Images/menu4.png')} /></li></Link>
                   <Link to="/ward-device"><li><img src={require('../../assets/Images/menu2.png')} /></li></Link>
                   <Link to="/ward-nurse"><li><img src={require('../../assets/Images/menu5.png')} /></li></Link>
                   <Link to="/ward-setting"><li><img src={require('../../assets/Images/menu3.png')} /></li></Link>
                 </ul>
               </div>
            </div>
            <div className="right_dashboard">
               <HEADER headerName="ward"/>
              <div class="mid-section-dshbrd">
                {this.state.showMenu && 
                 <DETAILMENU />
                }
                <div className="inner_dash">
                  <div className="left-mid-dash">
                    <h2>Dashboard</h2>
                    <h4 class="sumry_head">Summary</h4>
                  <div className="wrap_left_section">
                    <div className="dash_ward_oprtn_wrap">
                      <div className="urgnt_oprtn_wrap">
                        <div className="urgnt_row">
                          <span className="urgnt_txt_red">Urgent</span>
                          <span className="drip_img_wrap"><i class="fa fa-bell cstm_bell"></i></span>
                        </div>
                        <div className="urgnt_number_wrap">
                          <span className="cirlcle_dot"></span>
                          <span className="number_txt_white">1</span>
                        </div>
                        <div align="center">
                          <h5>Operation</h5>
                          <span>is almost Complete</span>
                        </div>
                      </div>
                      <div className="infusn_nrse_wrap">
                        <div className="infusn_wrap">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">6</span>
                            <span className="drip_img_wrap"><img src={require('../../assets/Images/drip.png')} /></span>
                          </div>
                          <h5>Active Infusion</h5>
                        </div>
                        <div className="infusn_wrap active_nurse">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">6</span>
                            <span className="drip_img_wrap"><img src={require('../../assets/Images/drip.png')} /></span>
                          </div>
                          <h5>Active Nurses</h5>
                        </div>
                      </div>
                    </div>     
                    <div className="device_in_use_wrapper">
                      <div className="device_inuse">
                        <span class="urgnt_txt">02</span>
                        <span className="drip_img_wrap"><img class="device_inuse_img" src={require('../../assets/Images/drip.png')} /></span>
                      </div>
                      <div className="device_inuse">
                        <span class="devide_inuse_txt">Devide in use</span>
                        <span className="device_idle"><span className="idle_number">45</span> <span className="idle_txt">Idle</span></span>
                      </div>
                    </div>

                    <div className="device_in_use_wrapper time_left_wrapper">
                      <div className="device_inuse">
                        <span class="tag_name">Tag Name</span>
                        <span className="tag_name">Time left</span>
                      </div>
                      <div className="device_inuse">
                        <span class="tag_name">B4</span>
                        <span className="device_idle">00:12:20</span>
                      </div>
                      <div className="device_inuse">
                        <span class="tag_name">B17</span>
                        <span className="device_idle">01:40:20</span>
                      </div>
                      <div className="device_inuse see_all_wrap"><span class="see_all_txt">see all</span></div>
                    </div>
                    </div>
                  </div>

                  <div className="right-mid-dash">
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
                        {wardInfusion.data && this.activeInfusionList(wardInfusion.data)}
                      </div>
                      <div className="infusion_wrap bottom">
                        <h4 class="sumry_head2">Active Nurses</h4>
                        <span class="see_all_txt">see all</span>
                      </div>
                      <div className="active_dsh_list">    
                       {wardNurse.data && this.activeNurseList(wardNurse.data)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginResponse: state.WardLogin,
  WardNurse: state.WardNurse,
  WardInfusion: state.WardInfusion,
  WardDevice: state.WardDevice
});

export default connect(mapStateToProps)(WardDashBoard);
