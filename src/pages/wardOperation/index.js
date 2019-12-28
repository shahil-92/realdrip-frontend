import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HEADER from '../../components/Headers/header'
import DETAILMENU from '../../components/Headers/detailMenu'
import LEFT_HEADER from '../../components/Headers/leftHeader'
import * as MetaData from '../../utils/metaData'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Table from 'react-bootstrap/Table'
export class WardOperation extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false,
      activeTab: 'active'
    };
  }

  handleClick = () =>{
    this.setState({showMenu : !this.state.showMenu})
  }

  handleActiveTab = (tab) => {
    this.setState({activeTab : tab})
  }

  activeInfusionList = (data) => {
    console.log('===ddd= ',data)
     return ['1','2','3'].map((data, key)=>{
     return(
         <tr className={(key === 0 ) ? "list_heading_ul ul_contnt active_dsh_list" : "list_heading_ul ul_contnt"}>    
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
             <div className="infusn_usr_img"><img src={require('../../assets/Images/user.png')}></img></div>
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

  render() {
    const {activeTab} = this.state
    return (
        <div className="main_wrapper ">
           <div className="inner_dshbrd_wrap">
           <LEFT_HEADER onClick={this.handleClick} LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA} {...this.props}/>
            <div className="right_dashboard">
              <HEADER headerName="ward"/> 
              <div class="mid-section-dshbrd">
                {this.state.showMenu && <DETAILMENU />}
                <div className="inner_dash">
                  <div className="left-mid-dash">
                    <h2>Operations</h2>
                    <h4 class="sumry_head">Summary</h4>
                    <div className="oprtn_tabs_main_wrapper">
                        <div className={activeTab==="active" ? "oprtn_history_tab activeTab" : 'oprtn_history_tab'}  onClick={() => this.handleActiveTab('active')}>Active</div>
                        <div className={activeTab==="all" ? "oprtn_history_tab activeTab" : 'oprtn_history_tab'} onClick={() => this.handleActiveTab('all')}>All</div>
                    </div>
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
                          <Table responsive>
                              <thead>
                              <tr className="list_heading_ul">
                                  <td>Volume</td>
                                  <td>Countdown</td>
                                  <td>Flowerate</td>
                                  <td>Nurse</td>
                                  <td>Patient Case</td>
                              </tr>
                              </thead>
                              <tbody>
                              {this.activeInfusionList()}
                              </tbody>
                          </Table>
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
