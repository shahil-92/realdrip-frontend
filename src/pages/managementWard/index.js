import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HEADER from '../../components/Headers/header'
import DETAILMENU from '../../components/Headers/detailMenu'
import LEFT_HEADER from '../../components/Headers/leftHeader'
import * as MetaData from '../../utils/metaData'
import Table from 'react-bootstrap/Table'
export class ManagementWard extends React.Component {
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
           <LEFT_HEADER onClick={this.handleClick} LEFT_HEADER_DATA={MetaData.MANAGEMENT_LEFT_HEADER_DATA} {...this.props}/>
            <div className="right_dashboard">
              <HEADER headerName="management"/>              
              <div class="mid-section-dshbrd_mgnt">
                {this.state.showMenu && <DETAILMENU LEFT_HEADER_DATA={MetaData.MANAGEMENT_LEFT_HEADER_DATA} {...this.props}/>} 
                <div className="inner_dash_mgnt_left">
                  <div className="left-mid-dash-mgmnt">
                  <div className="wrap_dash_new_wrad">
                    <div className="mngmnt_top_heading">
                        <h2>All Ward</h2>
                    </div>
                    <div className="add_new_device_wrap_mgmnt">
                        <div className="add_device_btn">Add new ward </div>
                    </div>
                  </div>
                      <div className="opertn_srch_main_wrapper_mgnt">
                        <div className="operation_search_tab_bar_mgnt">
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
                      {/* <div class="dash_active_wrap">
                        <ul className="list_heading_ul ul_contnt_mgnt">
                            <li>Label</li>
                            <li>Ward name</li>
                            <li>Devices deployed</li>
                            <li>Registered Nurses</li>
                        </ul>
                      </div> */}
                      <div class="dash_active_wrap oprtn_scroll_list">
                        <Table responsive>
                            <thead>
                              <tr>
                                <th className="lght_txtmgnt">Label</th>
                                <th className="lght_txtmgnt">Ward name</th>
                                <th className="lght_txtmgnt">Devices deployed</th>
                                <th className="lght_txtmgnt">Registered Nurses</th>  
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="lght_txtmgnt">Ward A</td>
                                <td className="lght_txtmgnt">Heart center</td>
                                <td className="lght_txtmgnt">20</td>
                                <td className="bld_txt_mgnt">43</td>
                              </tr>
                              <tr>
                                <td className="lght_txtmgnt">Ward A</td>
                                <td className="lght_txtmgnt">Heart center</td>
                                <td className="lght_txtmgnt">20</td>
                                <td className="bld_txt_mgnt">43</td>
                              </tr> <tr>
                                <td className="lght_txtmgnt">Ward A</td>
                                <td className="lght_txtmgnt">Heart center</td>
                                <td className="lght_txtmgnt">20</td>
                                <td className="bld_txt_mgnt">43</td>
                              </tr> <tr>
                                <td className="lght_txtmgnt">Ward A</td>
                                <td className="lght_txtmgnt">Heart center</td>
                                <td className="lght_txtmgnt">20</td>
                                <td className="bld_txt_mgnt">43</td>
                              </tr> <tr>
                                <td className="lght_txtmgnt">Ward A</td>
                                <td className="lght_txtmgnt">Heart center</td>
                                <td className="lght_txtmgnt">20</td>
                                <td className="bld_txt_mgnt">43</td>
                              </tr>

                            </tbody>
                        </Table>
                      </div>      
                  </div>
                </div>
                <div className="inner_dash_mgnt_right">
                  <div className="right-mid-dash_mgnt">
                      <div className="wrap_dash_new_wrad">
                        <div className="img_heading_wrap_mgnt">
                          <img className="img_ward_info" src={require('../../assets/Images/nurse_menu.png')}/>
                          <h4 className="ward_info_txt">Ward Info</h4>
                        </div>
                        <div className="add_new_device_wrap_mgmnt">
                            <div className="add_device_btn">Add new ward </div>
                        </div>
                      </div>
                      <div className="ward_info_ul_wrap">
                          <div className="wrad_name_label_wrap">
                            <div className="ward_name">
                              Ward Name
                            </div>
                            <div className="ward_name">
                              Ward Label
                            </div>  
                          </div>
                          <div className="wrad_name_label_wrap">
                            <div className="ward_label">
                              Heart center
                            </div>
                            <div className="ward_label">
                              Ward B
                            </div>  
                          </div>
                     </div>
                    
                     <div className="two_img_cntnt_wrap">
                        <div className="img_cntnt_wrap">
                            <div className="img_info_list_wrap">
                                <img className="img_info_list" src={require('../../assets/Images/drip.png')}/>
                            </div>
                            <div className="wrad_img_txt">
                              <div className="ward_name_img_txt">
                                Ward Name
                              </div>
                              <div className="ward_name_img_txt">
                                Ward Label
                              </div>  
                            </div>
                        </div>
                        <div className="img_cntnt_wrap">
                            <div className="img_info_list_wrap">
                                <img className="img_info_list" src={require('../../assets/Images/drip.png')}/>
                            </div>
                            <div className="wrad_img_txt">
                              <div className="ward_name_img_txt">
                                Ward Name
                              </div>
                              <div className="ward_name_img_txt">
                                Ward Label
                              </div>  
                            </div>
                        </div>
                     </div>
                     <div className="img_cntnt_wrap">
                        <div className="img_info_list_wrap">
                            <img className="img_info_list" src={require('../../assets/Images/drip.png')}/>
                        </div>
                        <div className="wrad_img_txt">
                          <div className="ward_name_img_txt">
                            Ward Name
                          </div>
                          <div className="ward_name_img_txt">
                            Ward Label
                          </div>  
                        </div>
                     </div>  
                  </div>
                  <div className="btn_para">
                       <p>login into ward dashboard to see full information about this device.</p>
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

export default connect(mapStateToProps)(ManagementWard);
