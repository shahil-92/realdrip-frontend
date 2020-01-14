import React from "react";
import { connect } from "react-redux";
import * as MetaData from "../../utils/metaData";
import Table from "react-bootstrap/Table";
import DETAILMENU from "../../components/Headers/detailMenu";
import HEADER from "../../components/Headers/header";
import LEFT_HEADER from "../../components/Headers/leftHeader";
import ProgressBar from "react-bootstrap/ProgressBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import REDCARD from "../../components/Ward/redCard";
import SMALL_CARD from "../../components/Ward/smallCard";
import SPAN_WRAPPER from "../../components/Ward/spanWrapper";
export class WardOperation extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      activeTab: "active"
    };
  }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  handleActiveTab = tab => {
    this.setState({ activeTab: tab });
  };

  handleRedirectToNotUpadted = () => {
    this.props.history.push("/operation-detail-not-update");
  };

  activeInfusionList = data => (
    <Table responsive style={{ "margin-top": "30px" }}>
      <thead>
        <tr className="list_heading_ul dhabord-ul-heading">
          <td>Volume</td>
          <td>Countdown</td>
          <td>Aaverage Flowerate</td>
          <td>Nurse</td>
          <td>Patient/Case</td>
        </tr>
      </thead>
      <tbody>
        {["1", "2", "3", "4","5", "6"].map((data, key) => {
          return (
            <tr
              className={
                key === 0
                  ? "list_heading_ul ul_contnt active_dsh_list"
                  : "list_heading_ul ul_contnt"
              }
              onClick={this.handleRedirectToNotUpadted}
            >
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
                <div className="infusn_usr_img">
                  <img src={require("../../assets/Images/nurse.svg")}></img>
                </div>
                <div className="infusn_usr_name">Titlayo Olaide</div>
              </td>
              <td>
                <div className="infusn_usr_fname">Frank</div>
                <div className="infusn_disease_name">Malaria</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );

  activeInfusionListHistory = data => (
    <Table responsive style={{ "margin-top": "30px" }}>
      <thead>
        <tr className="list_heading_ul dhabord-ul-heading">
          <td>Volume</td>
          <td>Countdown</td>
          <td>Flowerate</td>
          <td>Nurse</td>
          <td>Patient/Case</td>
        </tr>
      </thead>
      <tbody>
        {["1", "2", "3", "4", "5", "6"].map((data, key) => {
          return (
            <tr
              className={
                key === 0
                  ? "list_heading_ul ul_contnt active_dsh_list"
                  : "list_heading_ul ul_contnt"
              }
            >
              <td>
                <div className="bld_prcnt">Completed</div>
                <ProgressBar className="operation-history">
                  <ProgressBar variant="warning" now={50} key={2} />
                </ProgressBar>
                <div className="bld_txt">Saline water</div>
              </td>
              <td>
                <div className="time_only">12:23pm</div>
              </td>
              <td>
                <div className="speed_hr">
                  {" "}
                  <span> 28 </span>{" "}
                  <span className="speed_unit bld_txt">ml/hr</span>{" "}
                </div>
              </td>
              <td>
                <div className="infusn_usr_img">
                  <img src={require("../../assets/Images/user.png")}></img>
                </div>
                <div className="infusn_usr_name">Titlayo Olaide</div>
              </td>
              <td>
                <div className="infusn_usr_fname">Frank</div>
                <div className="infusn_disease_name">Malaria</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );

  render() {
    const { activeTab } = this.state;
    return (
      <div className="main_wrapper ">
        <div className="inner_dshbrd_wrap">
          <LEFT_HEADER
            onClick={this.handleClick}
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
                  <h2>Operations</h2>
                  <div className="oprtn_tabs_main_wrapper margnTop">
                    <div
                      className={
                        activeTab === "active"
                          ? "oprtn_history_tab activeTab"
                          : "oprtn_history_tab"
                      }
                      onClick={() => this.handleActiveTab("active")}
                    >
                      Active
                    </div>
                    <div
                      className={
                        activeTab === "all"
                          ? "oprtn_history_tab activeTab"
                          : "oprtn_history_tab"
                      }
                      onClick={() => this.handleActiveTab("all")}
                    >
                      History
                    </div>
                  </div>
                  <h4 class="sumry_head">Summary</h4>
                  <div className="wrap_left_section">
                    {activeTab === "active" && (
                      <div className="dash_ward_oprtn_wrap">
                        <REDCARD
                          wrapperClass="urgnt_oprtn_wrap"
                          heading="Urgent"
                          count="1"
                          subHeading="Operation"
                          text="is almost Complete"
                        />
                        <div className="infusn_nrse_wrap">
                          <SMALL_CARD
                            wrapperClass="infusn_wrap"
                            innerWrapClass="wrpd_icon_num"
                            src={require("../../assets/Images/drip.png")}
                            heading="Active Infusion"
                            count="6"
                          />
                          <SMALL_CARD
                            wrapperClass="infusn_wrap active_nurse"
                            innerWrapClass="wrpd_icon_num"
                            heading="incomplete data"
                            count="6"
                          />
                        </div>
                      </div>
                    )}

                    {activeTab === "all" && (
                      <div className="dash_ward_oprtn_wrap">
                        <div className="infusn_nrse_wrap whiteBG">
                          <div className="oprtn_histry_img_wrap">
                            <img
                              src={require("../../assets/Images/drip.png")}
                            />
                          </div>
                          <span class="urgnt_txt align-center">232</span>
                          <h5 className="btm_oprtn_txt">Completed</h5>
                        </div>
                        <div className="infusn_nrse_wrap">
                          <SMALL_CARD
                            wrapperClass="infusn_wrap"
                            innerWrapClass="wrpd_icon_num"
                            heading="Completed"
                            count="232"
                          />
                          <SMALL_CARD
                            wrapperClass="infusn_wrap active_nurse"
                            innerWrapClass="wrpd_icon_num"
                            heading="Terminated"
                            count="90"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="right-mid-dash">
                  <div className="right-wrap-heading ward-opertn-right-warp">
                    <div className="opertn_srch_main_wrapper">
                      <SearchBar
                        SearchdropDownWrapClass="operation_search_tab_bar"
                        searchInputWrapClass="oprtn_search_wrap operation_pdng"
                        dropDownWrapClass="oprtn_urgncy_wrap operation_pdng"
                        DropdownName="Urgency"
                      />
                    </div>
                    <div class="dash_active_wrap minHeight500">
                      {activeTab === "active" && this.activeInfusionList()}
                      {activeTab === "all" && this.activeInfusionListHistory()}
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(WardOperation);
