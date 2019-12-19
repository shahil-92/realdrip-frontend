import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import HEADER from '../../components/Headers/header'
import DETAILMENU from '../../components/Headers/detailMenu'
export class ManagementDashboard extends React.Component {
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
    this.props.history.push('/operation-detail')
 }

  render() {
    return (
        <div className="main_wrapper ">
           <div className="inner_dshbrd_wrap">
            <div className="left_dashboard">
              <div className="inner_left_dashboard">
               <div className="logo" onClick={this.handleClick}><i class="fa fa-bars"></i></div>
               <ul className="menu_wrap">
                   <Link to="/management-dashboard" ><li><img src={require('../../assets/Images/menu1_active.png')} /> </li></Link>
                   <Link to="/management-ward"><li><img src={require('../../assets/Images/menu4.png')} /></li></Link>
                   <Link to="/management-device"><li><img src={require('../../assets/Images/menu2.png')} /></li></Link>
                   <Link to="/management-nurse"><li><img src={require('../../assets/Images/menu5.png')} /></li></Link>
                   <Link to="/management-setting"><li><img src={require('../../assets/Images/menu3.png')} /></li></Link>
                 </ul>
               </div>
            </div>
            <div className="right_dashboard">
              <HEADER headerName="management"/>    
              <div class="mid-section-dshbrd">
                {this.state.showMenu && <DETAILMENU />}
                <div className="inner_dash">
                  <div className="wrap_dash_new_wrad">
                    <div className="mngmnt_top_heading">
                        <h2>Dashboard</h2>
                        <h4 class="sumry_head">Summary</h4>
                    </div>
                    <div className="add_new_device_wrap_mgmnt">
                        <div className="add_device_btn">Add new ward </div>
                    </div>
                  </div>
                 

                  <div className="wrap_mngmnt_sectn">
                    <div className="device_in_use_wrapper mngnt_inner_wrap">
                      <div className="device_inuse">
                        <span class="txt_dashboard ">02</span>
                        <span className="drip_img_wrap"><img class="device_inuse_img" src={require('../../assets/Images/drip.png')} /></span>
                      </div>
                      <div className="device_inuse">
                        <span class="devide_inuse_txt_mgnt">Devide in use</span>
                        <span class="see_all_txt_mgmnt">see all</span>
                      </div>
                    </div>

                    <div className="device_in_use_wrapper mngnt_inner_wrap">
                      <div className="device_inuse">
                        <span class="txt_dashboard">02</span>
                        <span className="drip_img_wrap"><img class="device_inuse_img" src={require('../../assets/Images/drip.png')} /></span>
                      </div>
                      <div className="device_inuse">
                        <span class="devide_inuse_txt_mgnt">Devide in use</span>
                        <span class="see_all_txt_mgmnt">see all</span>
                      </div>
                    </div>

                    <div className="device_in_use_wrapper mngnt_inner_wrap">
                      <div className="device_inuse">
                        <span class="txt_dashboard">02</span>
                        <span className="drip_img_wrap"><img class="device_inuse_img" src={require('../../assets/Images/drip.png')} /></span>
                      </div>
                      <div className="device_inuse">
                        <span class="devide_inuse_txt_mgnt">Devide in use</span>
                        <span class="see_all_txt_mgmnt">see all</span>
                      </div>
                    </div>

                    <div className="device_in_use_wrapper mngnt_inner_wrap">
                      <div className="device_inuse">
                        <span class="txt_dashboard">02</span>
                        <span className="drip_img_wrap"><img class="device_inuse_img" src={require('../../assets/Images/drip.png')} /></span>
                      </div>
                      <div className="device_inuse">
                        <span class="devide_inuse_txt_mgnt">Devide in use</span>
                        <span class="see_all_txt_mgmnt">see all</span>
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

export default connect(mapStateToProps)(ManagementDashboard);
