import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HEADER from '../../components/Headers/header'
import DETAILMENU from '../../components/Headers/detailMenu'
import LEFT_HEADER from '../../components/Headers/leftHeader'
import * as MetaData from '../../utils/metaData'
import Table from 'react-bootstrap/Table'
export class ManagementDevices extends React.Component {
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
                        <h2>All Devices</h2>
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
                            <div className="oprtn_urgncy_wrap operation_pdng mgnt_sort_by">
                                <span className="txt_urgncy">Sort by</span> <span className="bld_txt_mgnt">Label</span>
                                <span className="oprtn_down_arrow"><i class="fa fa-chevron-down cstm_dwn_arrow"></i></span>
                            </div>
                        </div>
                      </div>            
                      <div class="dash_active_wrap oprtn_scroll_list">
                        <Table responsive>
                            <thead>
                              <tr>
                                <th className="lght_txtmgnt">Label</th>
                                <th className="lght_txtmgnt">Device ID</th>
                                <th className="lght_txtmgnt" >Status</th>  
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="bld_txt_mgnt">B1</td>
                                <td className="lght_txtmgnt">02020232</td>
                                <td className="bld_txt_mgnt">Idle</td>
                              </tr>
                              <tr>
                                <td className="bld_txt_mgnt">B1</td>
                                <td className="lght_txtmgnt">02020232</td>
                                <td className="bld_txt_mgnt">Idle</td>
                              </tr>
                              <tr>
                                <td className="bld_txt_mgnt">B1</td>
                                <td className="lght_txtmgnt">02020232</td>
                                <td className="bld_txt_mgnt">Idle</td>
                              </tr>
                              <tr>
                                <td className="bld_txt_mgnt">B1</td>
                                <td className="lght_txtmgnt">02020232</td>
                                <td className="bld_txt_mgnt">Idle</td>
                              </tr>
                              <tr>
                                <td className="bld_txt_mgnt">B1</td>
                                <td className="lght_txtmgnt">02020232</td>
                                <td className="bld_txt_mgnt">Idle</td>
                              </tr>
                            </tbody>
                        </Table>
                      </div>      
                  </div>
                </div>
                <div className="inner_dash_mgnt_right">
                  <div className="right-mid-dash_mgnt">
                      <div className="wrap_device_img_mgnt">
                         <img className="img_device_info" src={require('../../assets/Images/nurse_menu.png')}/>
                      </div>
                      <h4 className="device_info_txt">Device Info</h4>
                      <ul className="device_ul_right_wrap">
                        <li>
                          <div className="lght_txtmgnt">Label</div>
                          <div className="bld_txt_mgnt">B2</div>
                        </li>
                        <li>
                          <div className="lght_txtmgnt">ID</div>
                          <div className="bld_txt_mgnt">02012012</div>
                        </li>
                        <li>
                          <div className="lght_txtmgnt">Use Count</div>
                          <div className="bld_txt_mgnt">320</div>
                        </li>
                      </ul>  
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

export default connect(mapStateToProps)(ManagementDevices);
