import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


export class ConnectedInuse extends React.Component {
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
                   <Link to=""><li><img src={require('../../assets/Images/menu3.png')} /></li></Link>
                 </ul>
               </div>
            </div>
            <div className="right_dashboard">
               <div className="header_dash">
                  <div className="header_right_dash">
                    <img src={require('../../assets/Images/dummy_logo.jpg')} />
                    <span class="logo_hedng">RealDrip</span>
                    <span className="ward">Ward</span>
                  </div>
                  <div className="header_left_dash">
                    <span>How it works</span>
                  </div>
              </div>
              
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
                   <div className="wrap_ontxt">
                      <div className="wrap_b2_txt"><span className="b2_txt">B2</span></div>
                      <div className="wrap_on_txt"><div className="on_txt">On</div> <div className="round_green_circle"></div></div>
                   </div>
                   <div className="wrap_label_main_wrap">
                      <div className="label_wrapper"><div className="Label_b2_name">Label</div><div className="small_txt">B2</div></div>
                      <div className="label_wrapper pdng_right_label"><div className="Label_b2_name">ID</div><div className="small_txt">02113322</div></div>
                   </div>


                  <div className="edit_label_wrap">Edit Label</div>
                 
                
                  <div className="wrap_left_section">
                    <div className="dash_ward_device_wrap oprtn_wrap connect_left_top_margin">
                    <h4 class="sumry_head">Status</h4>
                    <div className="status_wrapper">
                        <div className="status_icon_txt_wrap"><div className="con_text">Connected</div> <div className="status_img_wrap"><img src={require('../../assets/Images/drip.png')} /></div></div>
                        <div className="status_icon_txt_wrap"><div className="con_text">In use</div> <div className="status_img_wrap"><img src={require('../../assets/Images/drip.png')} /></div></div>
                    </div>
                    <h4 class="sumry_head">Summary</h4>
                   
                     <div className="infusn_wrap device_infusn  oprtn_dtl_wrd">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">
                                <h3 className="prcnt_opt_detail">28</h3>
                                <h5 className="prcnt_op_txt">All Operations</h5>
                            </span>
                            <span className="drip_img_wrap"><img src={require('../../assets/Images/drip.png')} /></span>
                          </div>
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
                  <h4 class="infusion_heading">Infusion Operation</h4>
                    <div className="history_insuse_tabs_wrap">
                        <div className="con_text active">In use</div>
                        <div className="con_text">History</div>
                    </div>
                    <div className="right-wrap-heading devics_lst_clmn">  
                      <h3>Doctor Instruction</h3>
                      <div class="dash_active_wrap whitebg">
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
                            <div className="infusn_usr_fname">Frank</div>
                            <div className="infusn_disease_name">Malaria</div>
                          </li>
                          <li>
                            <div className="infusn_usr_img"><img src={require('../../assets/Images/user.png')}></img></div>
                            <div className="infusn_usr_name">Titlayo Olaide</div>
                          </li>
                        </ul>
                      </div>
                      <h3>Device Control</h3>
                      <div class="dash_active_wrap2">
                         <div className="oprtn_device_control whitebg">
                             <div>Pause</div>
                             <div className="cstm_icon"><i class="fa fa-play" aria-hidden="true"></i></div>
                         </div>
                         <div className="oprtn_device_control whitebg">
                             <div>Pause</div>
                             <div className="cstm_icon"><i class="fa fa-repeat" aria-hidden="true"></i></div>
                         </div>
                         <div className="oprtn_device_control whitebg">
                             <div>Pause</div>
                             <div className="cstm_icon"><i class="fa fa-play" aria-hidden="true"></i></div>
                         </div>
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
  addingUserStarted: state.user.createAdmin.addingUserStarted,
  addingUserResolved: state.user.createAdmin.addingUserResolved,
  addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(ConnectedInuse);
