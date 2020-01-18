import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HEADER from "../../components/Headers/header";
import LEFT_HEADER from "../../components/Headers/leftHeader";
import * as MetaData from "../../utils/metaData";
import Form from "react-bootstrap/Form";
import DETAILMENU from "../../components/Headers/detailMenu";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";
import CustomSwitch from "../../components/Form/CustomSwitch";
import WifiiPopUpWrap from "../WifiiPopUpWrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

export class ConnectedInuse extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: "inuse",
      showMenu: false,
      SwitchToggle: false,
      SwitchToggleDevice: false,
      SwitchToggleBasic: false
    };
  }

  handleClick = tab => {
    this.setState({ selectedTab: tab });
  };
  handleClickToggle = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };
  handleSwtich = event => {
    this.setState({ SwitchToggle: !this.state.SwitchToggle });
  };
  handleSwtichFirst = event => {
    this.setState({ SwitchToggleBasic: !this.state.SwitchToggleBasic });
  };
  handleSwtichDevice = event => {
    this.setState({ SwitchToggleDevice: !this.state.SwitchToggleDevice });
  };
  closeModal = () => {
    this.setState({ SwitchToggle: false });
  };

  render() {
    const {
      selectedTab,
      SwitchToggle,
      SwitchToggleBasic,
      SwitchToggleDevice
    } = this.state;
    return (
      <div className="main_wrapper ">
        <div className="inner_dshbrd_wrap">
          <LEFT_HEADER
            onClick={this.handleClickToggle}
            LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA}
            {...this.props}
          />
          <div className="right_dashboard">
            <HEADER headerName="ward" />
            <div class="mid-section-dshbrd">
              {this.state.showMenu && (
                <DETAILMENU
                  LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA}
                  {...this.props}
                />
              )}
              <div className="inner_dash">
                <div className="left-mid-dash">
                  <div className="main_wrap_switch_conted">
                    {/* <CustomSwitch
                      wrapperClass="toggle"
                      inputId="temp"
                      tempId="temp"
                      onChange={event => this.handleSwtichFirst(event)}
                      SwitchToggle={SwitchToggleBasic}
                    /> */}
                    <div className="wrap_heading_and_on_off">
                      <div className="heading"> B2 </div>
                      <div className={SwitchToggleDevice ? "on_off_wrap swicthOff":"on_off_wrap"}><div className="on_off_txt">{SwitchToggleDevice ? 'Off' : 'On'}</div> <div className={SwitchToggleDevice ? "on_off_cirlcle swicthOff_dark" : "on_off_cirlcle"}></div> </div>
                    </div>
                    <div className="wrap_label_main_wrap">
                      <div className="label_wrapper">
                        <div className="Label_b2_name">Label</div>
                        <div className="small_txt conected_bld_txt">B2</div>
                      </div>
                      <div className="label_wrapper pdng_right_label">
                        <div className="Label_b2_name">ID</div>
                        <div className="small_txt conected_bld_txt">
                          02113322
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="edit_label_wrap">Edit Label</div>
                  <div className="wrap_left_section">
                    <div className="dash_ward_device_wrap oprtn_wrap connect_left_top_margin">
                      <h4 class="sumry_head status-heading">Status</h4>
                      <div className="status_wrapper">
                        <div className="status_icon_txt_wrap">
                          <div className="con_text_status">Connected</div>{" "}
                          <div className="status_img_wrap">
                            <img
                              src={require("../../assets/Images/wifi-medium-signal-symbol.svg")}
                            />
                          </div>
                        </div>
                        <div className="status_icon_txt_wrap">
                          <div className="con_text_status">In use</div>{" "}
                          <div className="status_img_wrap">
                            <img
                              src={require("../../assets/Images/operation_menu_active.png")}
                            />
                          </div>
                        </div>
                      </div>
                      <h4 class="sumry_head">Summary</h4>
                      <div className="infusn_wrap device_infusn  oprtn_dtl_wrd">
                        <div className="wrpd_icon_num">
                          <span className="urgnt_txt">
                            <h3 className="prcnt_opt_detail">28</h3>
                            <h5 className="prcnt_op_txt">All Operations</h5>
                          </span>
                          <span className="drip_img_wrap">
                            <img
                              src={require("../../assets/Images/drip.png")}
                            />
                          </span>
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
                    <div
                      className={
                        selectedTab === "inuse" ? "con_text active" : "con_text"
                      }
                      onClick={() => this.handleClick("inuse")}
                    >
                      In use
                    </div>
                    <div
                      className={
                        selectedTab === "history"
                          ? "con_text active"
                          : "con_text"
                      }
                      onClick={() => this.handleClick("history")}
                    >
                      History
                    </div>
                  </div>
                  {selectedTab === "history" && (
                    <div className="operation_search_tab_bar">
                      <div className="oprtn_search_wrap operation_pdng">
                        <input
                          type="text"
                          className="form-control cstm_search"
                        />
                        <span className="search_icon">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </span>
                      </div>
                      <div className="oprtn_hmbrgr_image operation_pdng">
                        <i class="fa fa-bars"></i>
                      </div>
                      <div className="oprtn_urgncy_wrap operation_pdng">
                        <span className="txt_urgncy">Urgency</span>
                        <span className="oprtn_down_arrow">
                          <i class="fa fa-chevron-down cstm_dwn_arrow"></i>
                        </span>
                      </div>
                    </div>
                  )}

                  {selectedTab === "inuse" && (
                    <div className="right-wrap-heading devics_lst_clmn">
                      <h3 className="small_txt_h3">Infusion Operation</h3>
                      <div className="dash_active_wrap white-background height-auto">
                        <Table responsive>
                          <tbody>
                            <tr className="list_heading_ul ul_contnt h70">
                              <td>
                                <div className="bld_prcnt">89%</div>
                                <div className="wrapper_progress_bar conted-inuse-bar">
                                  <div className="inner_progress_bar"></div>
                                </div>
                                <div className="bld_txt">Blood</div>
                              </td>
                              <td>
                                <div className="time_in_second bld_txt">
                                  00:13:00
                                </div>
                                <div className="time_only">12:23pm</div>
                              </td>
                              <td>
                                <div className="speed_hr">
                                  {" "}
                                  <span> 28 </span>{" "}
                                  <img
                                    class="speed_up"
                                    src={require("../../assets/Images/dummy_logo.jpg")}
                                  ></img>
                                </div>
                                <div className="speed_unit bld_txt">ml/hr</div>
                              </td>
                              <td>
                                <div className="infusn_usr_fname">Frank</div>
                                <div className="infusn_disease_name">
                                  Malaria
                                </div>
                              </td>
                              <td>
                                <div className="infusn_usr_img">
                                  <img
                                    src={require("../../assets/Images/user_round_girl.png")}
                                  ></img>
                                </div>
                                <div className="infusn_usr_name">
                                  Titlayo Olaide
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>

                      <h3 className="small_txt_h3">Device Control</h3>
                      <div class="dash_active_wrap2">
                        <div className="oprtn_device_control whitebg">
                          <div>Pause</div>
                          <div className="cstm_icon">
                            <i class="fa fa-play" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="oprtn_device_control whitebg">
                          <div>Reset</div>
                          <div className="cstm_icon">
                            <i class="fa fa-repeat" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="oprtn_device_control whitebg">
                          <div>Switch device off</div>
                          <CustomSwitch
                            wrapperClass="toggle"
                            inputId="temp1"
                            tempId="temp1"
                            onChange={event => this.handleSwtichDevice(event)}
                            SwitchToggle={SwitchToggleDevice}
                          />
                        </div>
                        <div className="oprtn_device_control whitebg hospital-wifi">
                          <div className="first-div">
                            <div className="color">
                              <img
                                src={require("../../assets/Images/wifi-medium-signal-symbol.svg")}
                              />
                            </div>
                            <div className="color">Hospital wifi</div>
                          </div>

                          <div className="first-div">
                            <div>Disconnect device</div>
                            <CustomSwitch
                              wrapperClass="toggle"
                              inputId="temp2"
                              tempId="temp2"
                              onChange={event => this.handleSwtich(event)}
                              SwitchToggle={SwitchToggle}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTab === "history" && (
                    <div className="dash_active_wrap_history">
                      <ul className="conctd_history_ul">
                        <li>Duration</li>
                        <li>Infusion</li>
                        <li>Ave. Flowerate</li>
                        <li>Patient</li>
                        <li>Nurse</li>
                      </ul>
                    </div>
                  )}
                  {selectedTab === "history" && (
                    <div className="histry_table_wrap">
                      <h4 className="bld_txt_hstry">Today</h4>
                      <ul className="history_table_ul connected_ul">
                        <li>
                          <div className="light_txt_hstry">00:13:00</div>
                          <div className="bld_txt_hstry">12:23pm</div>
                        </li>
                        <li>
                          <div className="light_txt_hstry">Saline water</div>
                          <div className="bld_txt_hstry">Completed</div>
                        </li>
                        <li>
                          <div>
                            <span className="bld_txt_hstry">28</span>{" "}
                            <span className="light_txt_hstry"> ml/hr </span>
                          </div>
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
                          <div className="light_txt_hstry">Saline water</div>
                          <div className="bld_txt_hstry">Completed</div>
                        </li>
                        <li>
                          <div>
                            <span className="bld_txt_hstry">28</span>{" "}
                            <span className="light_txt_hstry"> ml/hr </span>
                          </div>
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
                          <div className="light_txt_hstry">Saline water</div>
                          <div className="bld_txt_hstry">Completed</div>
                        </li>
                        <li>
                          <div>
                            <span className="bld_txt_hstry">28</span>{" "}
                            <span className="light_txt_hstry"> ml/hr </span>
                          </div>
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
                          <div className="light_txt_hstry">Saline water</div>
                          <div className="bld_txt_hstry">Completed</div>
                        </li>
                        <li>
                          <div>
                            <span className="bld_txt_hstry">28</span>{" "}
                            <span className="light_txt_hstry"> ml/hr </span>
                          </div>
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
                          <div className="light_txt_hstry">Saline water</div>
                          <div className="bld_txt_hstry">Completed</div>
                        </li>
                        <li>
                          <div>
                            <span className="bld_txt_hstry">28</span>{" "}
                            <span className="light_txt_hstry"> ml/hr </span>
                          </div>
                        </li>
                        <li>
                          <div className="light_txt_hstry">Titlayo Olaide</div>
                        </li>
                        <li>
                          <div className="light_txt_hstry">Frank</div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {SwitchToggle && <WifiiPopUpWrap PopUpClick={this.closeModal} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // addingUserStarted: state.user.createAdmin.addingUserStarted,
  // addingUserResolved: state.user.createAdmin.addingUserResolved,
  // addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(ConnectedInuse);
