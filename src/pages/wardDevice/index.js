import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import HEADER from '../../components/Headers/header'
import DETAILMENU from '../../components/Headers/detailMenu'
import LEFT_HEADER from '../../components/Headers/leftHeader'
import * as MetaData from '../../utils/metaData'
import Table from 'react-bootstrap/Table'

export class WardDevice extends React.Component {
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
    this.props.history.push('/connected-inuse')
 }

  render() {
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
                    <h2>Devices</h2>
                    <h4 class="sumry_head">Summary</h4>
                  <div className="oprtn_tabs_main_wrapper">
                      <div className="oprtn_active_tab">Active</div>
                      <div className="oprtn_history_tab">All</div>
                  </div>
                  <div className="wrap_left_section">
                    <div className="dash_ward_device_wrap">
                      <div className="infusn_device_wrap">
                        <div className="infusn_wrap green_device cstm_device_ward">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">6</span>
                            <span className="drip_img_wrap"><img src={require('../../assets/Images/drip.png')} /></span>
                          </div>
                          <h5>Active Infusion</h5>
                        </div>
                        <div className="infusn_wrap cstm_device_ward">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">6</span>
                            {/* <span className="drip_img_wrap"></span> */}
                          </div>
                          <h5>Active Infusion</h5>
                        </div>
                      </div>
                      <div className="infusn_wrap device_infusn">
                          <div className="wrpd_icon_num">
                            <span className="urgnt_txt">6</span>
                            <span className="drip_img_wrap"><img src={require('../../assets/Images/drip.png')} /></span>
                          </div>
                          <h5>Active Infusion</h5>
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
  
                        <Table responsive>
                        <thead>
                          <tr className="list_heading_ul">
                            <td className="devic_txt">To be free</td>
                            <td className="devic_txt">Label</td>
                            <td className="devic_txt">Nurse</td>
                          </tr>
                        </thead>
                          <tbody>
                            <tr className="list_heading_ul device_ul" onClick={()=>this.handleRedirectClick()}>    
                              <td>
                                <div className="bld_txt devic_txt">02:00pm</div>
                              </td>
                              <td>
                                <div className="time_only">B14</div>
                              </td>
                              <td>
                                <div className="speed_unit bld_txt devic_txt">Abimbola</div>
                              </td>
                            </tr>
                            <tr className="list_heading_ul device_ul" onClick={()=>this.handleRedirectClick()}>    
                              <td>
                                <div className="bld_txt devic_txt">02:00pm</div>
                              </td>
                              <td>
                                <div className="time_only">B14</div>
                              </td>
                              <td>
                                <div className="speed_unit bld_txt devic_txt">Abimbola</div>
                              </td>
                            </tr>
                            <tr className="list_heading_ul device_ul" onClick={()=>this.handleRedirectClick()}>    
                              <td>
                                <div className="bld_txt devic_txt">02:00pm</div>
                              </td>
                              <td>
                                <div className="time_only">B14</div>
                              </td>
                              <td>
                                <div className="speed_unit bld_txt devic_txt">Abimbola</div>
                              </td>
                            </tr>
                            <tr className="list_heading_ul device_ul" onClick={()=>this.handleRedirectClick()}>    
                              <td>
                                <div className="bld_txt devic_txt">02:00pm</div>
                              </td>
                              <td>
                                <div className="time_only">B14</div>
                              </td>
                              <td>
                                <div className="speed_unit bld_txt devic_txt">Abimbola</div>
                              </td>
                            </tr>
                          </tbody>
                        </Table> 
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

export default connect(mapStateToProps)(WardDevice);
