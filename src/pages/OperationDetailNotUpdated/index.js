import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import HEADER from '../../components/Headers/header'
import DETAILMENU from '../../components/Headers/detailMenu'
import LEFT_HEADER from '../../components/Headers/leftHeader'
import * as MetaData from '../../utils/metaData'
import Input from '../../components/inputComponent'

export class OperationDetailNotUpdated extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false
    };
  }

  handleClick = () =>{
    this.setState({showMenu : !this.state.showMenu})
  }

  handleRedirectToDeviceDetail = () => {
    this.props.history.push('/connected-inuse')
  }


  render() {
    return (
        <div className="main_wrapper ">
           <div className="inner_dshbrd_wrap">
            <LEFT_HEADER onClick={this.handleClick} LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA}  {...this.props}/>
            <div className="right_dashboard">
              <HEADER headerName="ward"/> 
              <div class="mid-section-dshbrd">
                {this.state.showMenu && <DETAILMENU LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA} {...this.props}/>}
                <div className="oprtn_dlt_wrap">
                   <div className="patnt_name">
                      <h2>Not Updated</h2>
                   </div>
                   
                    <div className="add_new_device_wrap">
                        <div className="add_device_btn">Delete Operation</div>
                    </div>
                </div>
                <div className="patnt_list_wrap">
                        <ul className="patnt_ul_list pading35">
                            <li>
                                {/* <div className="nurc_img_wrap">
                                  <img  src={require('../../assets/Images/user.png')}/>
                                </div> */}
                                <div className="nurc_detail_wrap">
                                    <span className="nurc_post">Nurse</span>
                                    <span className="nurc_name">Not Updated</span>
                                </div>
                            </li>
                            <li>
                                
                                <div className="nurc_detail_wrap">
                                    <span className="nurc_post">Nurse</span>
                                    <span className="nurc_name">Not Updated</span>
                                </div>
                            </li>
                            <li>
                                
                                <div className="nurc_detail_wrap">
                                    <span className="nurc_post">Nurse</span>
                                    <span className="nurc_name">Not Updated</span>
                                </div>
                            </li>
                            <li>
                                
                                <div className="nurc_detail_wrap">
                                    <span className="nurc_post">Nurse</span>
                                    <span className="nurc_name">Not Updated</span>
                                </div>
                            </li>
                        </ul>
                    </div>
               
                <div className="inner_dash">
                  <div className="left-mid-dash">
                  
                  <div className="wrap_left_section">
                    <div className="dash_ward_device_wrap oprtn_wrap">
                    
                    <div className="infusn_wrap device_infusn oprtn_dtl_wrd">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">
                                <h3 className="prcnt_opt_detail">89%</h3>
                                <h5 className="prcnt_op_txt">Dispense 462cl</h5>
                                <div className="wrapper_progress_bar"><div className="inner_progress_bar"></div></div>
                            </span>
                            <span className="drip_img_wrap"><img src={require('../../assets/Images/drip.png')} /></span>
                          </div>
                     </div>
                     <div className="infusn_wrap device_infusn  oprtn_dtl_wrd">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">
                                <div className="wrapper_blood_flow"><h3 className="prcnt_opt_detail">36</h3> <span className="bloodflow">ml/h</span> <span className="deg"></span></div>
                                <h5 className="prcnt_op_txt">Current flowrate</h5>
                            </span>
                            <span className="drip_img_wrap"><img src={require('../../assets/Images/drip.png')} /></span>
                          </div>
                     </div>
                     <div className="infusn_wrap device_infusn  oprtn_dtl_wrd">
                     <div className="wrpd_icon_num">
                            <div className="startvlm_wrap">
                                <h5 className="vlm_txt">420cl</h5>
                                <h5 className="vlm_op_txt">Stat Volume</h5>
                            </div>
                            <span className="dot-dot-line"></span>
                            <div className="startvlm_wrap">
                                <h5 className="vlm_txt_right">420cl</h5>
                                <h5 className="vlm_op_txt">Stat Volume</h5>
                            </div>
                      </div>
                      <div className="down_arrow_wrap">
                        <i class="fa fa-caret-down green_down"></i>
                        <i class="fa fa-caret-down red_down" ></i>
                      </div>
                      <div className="thrd_progress_wrap"><div className="wrapper_progress_bar middle_bar"><div className="inner_progress_bar"></div></div></div>

                     </div>

                    </div>
                    </div>
                  </div>
                  <div className="right-mid-dash">
                    <div className="right-wrap-heading devics_lst_clmn">  
                   
                     <div className="awaiting-heading-btn-wrap">
                        <div className="awaiting-actn-box-wrap"> <h3 className="awating-oprtn-not-update">Awaiting actions</h3> <div className="red-color-box">4</div></div>
                        <div className="actn-update"> Update </div>
                      </div>
                      <div class="dash_active_wrap2">
                         <div className="oprtn_device_control whitebg full-width-flex">
                          <div className="ward_input_wrap">
                            <div className="input_row">
                                <div className="input_wrap">
                                  <label>set volume up</label>
                                  <select value={this.state.selvalue} onChange={this.selhandleChange}>
                                    <option value="set-stop-volume-1">set stop volume 1</option>
                                    <option value="set-stop-volume-2">set stop volume 2</option>
                                    <option value="set-stop-volume-3">set stop volume 3</option>
                                    <option value="set-stop-volume-4">set stop volume 4</option>
                                  </select>
                                </div>   
                                <div className="input_wrap">
                                    <label>fill volume content</label>
                                    <Input
                                        type='text'
                                        className="form-control cstm-input"
                                        placeholder="Input Patient name"
                                        name="input-patient-case"
                                    />
                                </div>
                                <div className="input_wrap">
                                    <label>Input patient name</label>
                                    <Input
                                        type='text'
                                        className="form-control cstm-input"
                                        placeholder="Input Patient case"
                                        name="input-patient-case"
                                    />
                                </div>
                                <div className="input_wrap">
                                    <label>Input patient name</label>
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
                      
                      <h3>Doctor Instruction</h3>
                      <div class="dash_active_wrap whitebg">
                         <div className="oprtn_instrtn_wrap">
                             <h5>Instruction</h5>
                             <div>1. give patient 360ml of blood</div>
                             <div>2. let him have a 30 minute of sleep</div>
                         </div>
                      </div>
                      
                      <div className="device_page_wrap">
                      <h3>Device Control</h3>
                        <div className="add_device_page_btn" onClick={this.handleRedirectToDeviceDetail}>Device Page</div>
                      </div>
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
   // addingUserStarted: state.user.createAdmin.addingUserStarted,
  // addingUserResolved: state.user.createAdmin.addingUserResolved,
  // addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(OperationDetailNotUpdated);
