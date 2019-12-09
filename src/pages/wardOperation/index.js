import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HEADER from '../../components/header'

export class WardOperation extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false
    };
  }

  handleClick = () =>{
    this.setState({showMenu : !this.state.showMenu})
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
                    <h2>Operations</h2>
                    <h4 class="sumry_head">Summary</h4>
                  <div className="oprtn_tabs_main_wrapper">
                      <div className="oprtn_active_tab">Active</div>
                      <div className="oprtn_history_tab">History</div>
                  </div>
                  <div className="wrap_left_section">
                    <div className="dash_ward_oprtn_wrap">
                      <div className="urgnt_oprtn_wrap">
                        <div className="urgnt_row">
                          <span className="urgnt_txt">Urgent</span>
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
                            {/* <span className="drip_img_wrap"></span> */}
                          </div>
                          <h5>Active Infusion</h5>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="right-mid-dash">
                    <div className="right-wrap-heading"> 
                      <div className="opertn_srch_main_wrapper">
                        <div className="operation_search_tab_bar">
                            <div className="oprtn_search_wrap operation_pdng">
                                <input type="text" className="form-control cstm_search"/>
                                <span className="search_icon"><i class="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                            <div className="oprtn_hmbrgr_image operation_pdng">
                             <i class="fa fa-bars"></i>
                            </div>
                            <div className="oprtn_urgncy_wrap operation_pdng">
                                <span className="txt_urgncy">Urgency</span>
                                <span className="oprtn_down_arrow"><i class="fa fa-chevron-down cstm_dwn_arrow"></i></span>
                            </div>
                        </div>
                      </div>
                      <div class="dash_active_wrap">
                      <ul className="list_heading_ul">
                          <li>Volume</li>
                          <li>Countdown</li>
                          <li>Flowerate</li>
                          <li>Nurse</li>
                          <li>Patient Case</li>
                        </ul>
                        </div>
                      <div class="dash_active_wrap oprtn_scroll_list">
                        <ul className="list_heading_ul ul_contnt active_dsh_list">    
                          <li>
                            <div className="bld_prcnt">89%</div>
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

                        <ul className="list_heading_ul ul_contnt">    
                          <li>
                            <div className="bld_prcnt">89%</div>
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


                        <ul className="list_heading_ul ul_contnt">    
                          <li>
                            <div className="bld_prcnt">89%</div>
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
                        <ul className="list_heading_ul ul_contnt">    
                          <li>
                            <div className="bld_prcnt">89%</div>
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
                        <ul className="list_heading_ul ul_contnt">    
                          <li>
                            <div className="bld_prcnt">89%</div>
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
                        <ul className="list_heading_ul ul_contnt">    
                          <li>
                            <div className="bld_prcnt">89%</div>
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

export default connect(mapStateToProps)(WardOperation);
