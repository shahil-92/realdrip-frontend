import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import HEADER from '../../components/Headers/header'
import DETAILMENU from '../../components/Headers/detailMenu'
import LEFT_HEADER from '../../components/Headers/leftHeader'
import * as MetaData from '../../utils/metaData'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Table from 'react-bootstrap/Table'
import Input from '../../components/inputComponent'

export class NurseDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab:'inuse',
      showMenu: false,
      selvalue: 'set-stop-volume-1'
    };
  }

  handleClick = (tab) =>{
    this.setState({selectedTab : tab})
  }
  handleClickToggle = () =>{
    this.setState({showMenu : !this.state.showMenu})
  }

  selhandleChange = (event) => {
    this.setState({selvalue: event.target.value});
  }


  render() {
    const { selectedTab } = this.state
    return (
        <div className="main_wrapper ">
           <div className="inner_dshbrd_wrap">
           <LEFT_HEADER onClick={this.handleClickToggle} LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA} {...this.props}/>
            <div className="right_dashboard">
              <HEADER headerName="ward"/> 
              <div class="mid-section-dshbrd">
                {this.state.showMenu && <DETAILMENU LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA} {...this.props}/>}               
                <div className="inner_dash">
                  <div className="left-mid-dash left-mid-nurse-detail">
                   <div className="nurse_profile_detail">
                    <div className="wrap_img_profile">
                        <div className="wrap_b2_txt"><img src={require('../../assets/Images/user_round_girl.png')}></img></div>
                        <div className="nurs_name">Titilayo ayoade</div>
                    </div>
                    <div className="wrap_label_main_wrap cstm_nurse_detail">
                        <div className="label_wrapper">Hospital no.</div>
                        <div className="label_wrapper pdng_right_label">LJK/B2013/011</div>
                    </div>
                    <div className="edit_label_wrap cstm_nurse_detail">Edit Label</div>
                  </div>
                
                  <div className="wrap_left_section">
                    <div className="dash_ward_device_wrap oprtn_wrap connect_left_top_margin">
                    <h4 class="sumry_head">Status</h4>
                    <div className="status_wrapper">
                        <div className="status_icon_txt_wrap"><div className="con_text">Active</div> <div className="status_img_wrap"><img src={require('../../assets/Images/operation_menu_active.png')} /></div></div>
                        {/* <div className="status_icon_txt_wrap"><div className="con_text">In use</div> <div className="status_img_wrap"><img src={require('../../assets/Images/drip.png')} /></div></div> */}
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
                            <span className="urgnt_txt">28</span>
                          
                          </div>
                          <h5>Completed</h5>
                        </div>
                        <div className="infusn_wrap">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">2</span>
                            {/* <span className="drip_img_wrap"></span> */}
                          </div>
                          <h5>Terminated</h5>
                        </div>
                      </div>

                    </div>
                    </div>
                  </div>
                  <div className="right-mid-dash right-mid-nurse-detail">
                  <h4 class="infusion_heading">Infusion Operation</h4>
                    <div className="history_insuse_tabs_wrap">
                         <div className={selectedTab === 'inuse' ? "con_text active" : 'con_text'} onClick={()=>this.handleClick('inuse')}>In use</div>
                        <div className={selectedTab === 'history' ? "con_text active" : 'con_text'} onClick={()=>this.handleClick('history')}>History</div>
                    </div>

                    { selectedTab === 'history' && <div className="operation_search_tab_bar">
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
                    }

                   {selectedTab === 'inuse' && <div className="right-wrap-heading devics_lst_clmn">  
                    {/* <h3 className="small_txt_h3">Infusion Operation</h3> */}
                        <div className="dash_active_wrap white-background">
                      
                          <Table responsive>
                              <tbody>
                              <tr className="list_heading_ul ul_contnt h70">    
                                <td>
                                  <div className="bld_prcnt">89%</div>
                                  <div className="wrapper_progress_bar conted-inuse-bar"><div className="inner_progress_bar"></div></div>
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
                                  <div className="infusn_usr_fname">Frank</div>
                                  <div className="infusn_disease_name">Malaria</div>
                                </td>
                                <td>
                                  <div className="infusn_usr_img"><img src={require('../../assets/Images/user_round_girl.png')}></img></div>
                                  <div className="infusn_usr_name">Titlayo Olaide</div>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          </div>
                      <h3 className="small_txt_h3">Awating actions</h3>
                      <div class="dash_active_wrap2">
                         <div className="oprtn_device_control whitebg full-width-flex">
                          <div className="ward_input_wrap">
                            <div className="input_row">
                                <div className="input_wrap">
                                  <select value={this.state.selvalue} onChange={this.selhandleChange}>
                                    <option value="set-stop-volume-1">set stop volume 1</option>
                                    <option value="set-stop-volume-2">set stop volume 2</option>
                                    <option value="set-stop-volume-3">set stop volume 3</option>
                                    <option value="set-stop-volume-4">set stop volume 4</option>
                                  </select>
                                </div>   
                                <div className="input_wrap">
                                    <Input
                                        type='text'
                                        className="form-control cstm-input"
                                        placeholder="Input Patient name"
                                        name="input-patient-case"
                                    />
                                </div>
                                <div className="input_wrap">
                                    <Input
                                        type='text'
                                        className="form-control cstm-input"
                                        placeholder="Input Patient case"
                                        name="input-patient-case"
                                    />
                                </div>  
                              </div> 
                            </div>
                         </div>
                      </div>
                      </div> }

                      {selectedTab === 'history' &&
                        <div className="dash_active_wrap_history">
                        <ul className="conctd_history_ul">
                            <li>Volume</li>
                            <li>Countdown</li>
                            <li>Flowerate</li>
                            <li>Nurse</li>
                            <li>Patient Case</li>
                          </ul>
                        </div>
                      }
                       {selectedTab === 'history' && <div className="histry_table_wrap">
                        <h4 className="bld_txt_hstry">Today</h4>
                        <ul className="history_table_ul connected_ul">    
                          <li>
                            <div className="light_txt_hstry">00:13:00</div>
                            <div className="bld_txt_hstry">12:23pm</div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">00:13:00</div>
                            <div className="bld_txt_hstry">12:23pm</div>
                          </li>
                          <li>
                            <div><span className="bld_txt_hstry">28</span> <span className="light_txt_hstry"> ml/hr </span></div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">Titlayo Olaide</div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">Frank</div>
                          </li>
                        </ul>

                        <h4 className="bld_txt_hstry">Today</h4>
                        <ul className="history_table_ul connected_ul">    
                          <li>
                            <div className="light_txt_hstry">00:13:00</div>
                            <div className="bld_txt_hstry">12:23pm</div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">00:13:00</div>
                            <div className="bld_txt_hstry">12:23pm</div>
                          </li>
                          <li>
                            <div><span className="bld_txt_hstry">28</span> <span className="light_txt_hstry"> ml/hr </span></div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">Titlayo Olaide</div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">Frank</div>
                          </li>
                        </ul>


                        <h4 className="bld_txt_hstry">Today</h4>
                        <ul className="history_table_ul connected_ul">    
                          <li>
                            <div className="light_txt_hstry">00:13:00</div>
                            <div className="bld_txt_hstry">12:23pm</div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">00:13:00</div>
                            <div className="bld_txt_hstry">12:23pm</div>
                          </li>
                          <li>
                            <div><span className="bld_txt_hstry">28</span> <span className="light_txt_hstry"> ml/hr </span></div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">Titlayo Olaide</div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">Frank</div>
                          </li>
                        </ul>

                        <h4 className="bld_txt_hstry">Today</h4>
                        <ul className="history_table_ul connected_ul">    
                          <li>
                            <div className="light_txt_hstry">00:13:00</div>
                            <div className="bld_txt_hstry">12:23pm</div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">00:13:00</div>
                            <div className="bld_txt_hstry">12:23pm</div>
                          </li>
                          <li>
                            <div><span className="bld_txt_hstry">28</span> <span className="light_txt_hstry"> ml/hr </span></div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">Titlayo Olaide</div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">Frank</div>
                          </li>
                        </ul>

                        <h4 className="bld_txt_hstry">Today</h4>
                        <ul className="history_table_ul connected_ul">    
                          <li>
                            <div className="light_txt_hstry">00:13:00</div>
                            <div className="bld_txt_hstry">12:23pm</div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">00:13:00</div>
                            <div className="bld_txt_hstry">12:23pm</div>
                          </li>
                          <li>
                            <div><span className="bld_txt_hstry">28</span> <span className="light_txt_hstry"> ml/hr </span></div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">Titlayo Olaide</div>
                          </li>
                          <li>
                            <div className="light_txt_hstry">Frank</div>
                          </li>
                        </ul>
                      </div>}
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

export default connect(mapStateToProps)(NurseDetail);
