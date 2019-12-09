import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import HEADER from '../../components/header'

export class WardNurse extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false
    };
  }

  handleClick = () =>{
    this.setState({showMenu : !this.state.showMenu})
  }

  handleRedirectClick = () =>{
    this.props.history.push('/nurse-detail')
 }

  render() {
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
                {this.state.showMenu && <div className="second_menu_wrap">
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
                </div>}
                <div className="inner_dash">
                  <div className="left-mid-dash">
                    <h2>Nurses</h2>
                    <h4 class="sumry_head">Summary</h4>
                  <div className="oprtn_tabs_main_wrapper">
                      <div className="oprtn_active_tab">Active</div>
                      <div className="oprtn_history_tab">All</div>
                  </div>
                  <div className="wrap_left_section">
                    <div className="dash_ward_device_wrap">
                    
                    <div className="infusn_wrap device_infusn green_device nurse_active_wrd">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">6</span>
                            <span className="drip_img_wrap"><img src={require('../../assets/Images/drip.png')} /></span>
                          </div>
                          <h5>Active Infusion</h5>
                     </div>

                      <div className="infusn_device_wrap">
                        <div className="infusn_wrap">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">45</span>
                          
                          </div>
                          <h5>Active Infusion</h5>
                        </div>
                        <div className="infusn_wrap">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">43</span>
                            {/* <span className="drip_img_wrap"></span> */}
                          </div>
                          <h5>Active Infusion</h5>
                        </div>
                      </div>
                      
                    </div>
                    </div>
                  </div>
                  <div className="right-mid-dash">
                    <div className="right-wrap-heading devics_lst_clmn"> 
                      <div className="add_new_device_wrap">
                          <div className="add_device_btn">Add new device </div>
                      </div>
                        <div className="operation_search_tab_bar">
                            <div className="oprtn_search_wrap operation_pdng">
                                <input type="text" className="form-control cstm_search"/>
                                <span className="search_icon"><i class="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                            <div className="oprtn_hmbrgr_image operation_pdng">
                                <i class="fa fa-bars"></i>
                            </div>
                            <div className="oprtn_urgncy_wrap operation_pdng">
                                <span className="txt_urgncy">Name</span>
                                <span className="oprtn_down_arrow"><i class="fa fa-chevron-down cstm_dwn_arrow"></i></span>
                            </div>
                        </div>
                      
                      <div class="dash_active_wrap">
                        <ul className="list_heading_ul">
                          <li className="fst_nurs_li">Nurse</li>
                          <li className="">Hospital ID no.</li>
                          <li className="">Status</li>
                          <li className="">All Operations</li>
                        </ul>
                     </div>
                      <div class="dash_active_wrap oprtn_scroll_list active_dsh_list">
                        <ul className="list_heading_ul nurse_heding_ul" onClick={()=>this.handleRedirectClick()}>
                          <li>
                            <div className="bld_txt">
                              <img class="user_img" src={require('../../assets/Images/user.png')}></img>
                              <span>Frank Joseph</span>
                            </div>    
                          </li>    
                          <li>
                            <div className="bld_txt">02:00pm</div>
                          </li>
                          <li>
                            <div className="time_only">B14</div>
                          </li>
                          <li>
                            <div className="speed_unit bld_txt">Abimbola</div>
                          </li>
                        </ul>

                        <ul className="list_heading_ul nurse_heding_ul">
                          <li>
                            <div className="bld_txt">
                              <img class="user_img" src={require('../../assets/Images/user.png')}></img>
                              <span>Frank Joseph</span>
                            </div>    
                          </li>    
                          <li>
                            <div className="bld_txt">02:00pm</div>
                          </li>
                          <li>
                            <div className="time_only">B14</div>
                          </li>
                          <li>
                            <div className="speed_unit bld_txt">Abimbola</div>
                          </li>
                        </ul>
                        <ul className="list_heading_ul nurse_heding_ul">
                          <li>
                            <div className="bld_txt">
                              <img class="user_img" src={require('../../assets/Images/user.png')}></img>
                              <span>Frank Joseph</span>
                            </div>    
                          </li>    
                          <li>
                            <div className="bld_txt">02:00pm</div>
                          </li>
                          <li>
                            <div className="time_only">B14</div>
                          </li>
                          <li>
                            <div className="speed_unit bld_txt">Abimbola</div>
                          </li>
                        </ul>
                        <ul className="list_heading_ul nurse_heding_ul">
                          <li>
                            <div className="bld_txt">
                              <img class="user_img" src={require('../../assets/Images/user.png')}></img>
                              <span>Frank Joseph</span>
                            </div>    
                          </li>    
                          <li>
                            <div className="bld_txt">02:00pm</div>
                          </li>
                          <li>
                            <div className="time_only">B14</div>
                          </li>
                          <li>
                            <div className="speed_unit bld_txt">Abimbola</div>
                          </li>
                        </ul>
                        <ul className="list_heading_ul nurse_heding_ul">
                          <li>
                            <div className="bld_txt">
                              <img class="user_img" src={require('../../assets/Images/user.png')}></img>
                              <span>Frank Joseph</span>
                            </div>    
                          </li>    
                          <li>
                            <div className="bld_txt">02:00pm</div>
                          </li>
                          <li>
                            <div className="time_only">B14</div>
                          </li>
                          <li>
                            <div className="speed_unit bld_txt">Abimbola</div>
                          </li>
                        </ul>
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
   // addingUserStarted: state.user.createAdmin.addingUserStarted,
  // addingUserResolved: state.user.createAdmin.addingUserResolved,
  // addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(WardNurse);
