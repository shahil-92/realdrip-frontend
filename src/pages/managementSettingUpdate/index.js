import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../components/inputComponent'
// import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'

export class ManagementSettingUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
    };
  }

  handleClick = () =>{
     this.props.history.push('/ward-activation')
  }
  handleWardSignIn = () =>{
    this.props.history.push('/ward-dashboard')
 }

  render() {
    return (

        <div className="main_wrapper ">
        <div className="inner_dshbrd_wrap">
         <div className="left_dashboard">
           <div className="inner_left_dashboard">
            <div className="logo"><i class="fa fa-bars"></i></div>
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
             <div className="main_wrapper_mgnt_setng">
                    <div className="mgmnt_input_wrap_main">
                    <div className="mgnt_heading_setting">
                        <h4 class="head_accnt_h3">Management Account Settings</h4>
                    </div>
                     <div class="input_row_mgnt">
                        <div className="input_wrap_accnt_row">
                            <label className='lght_txtmgnt'>Medical Center Name</label>
                            <Input
                                type="text"
                                className="form-control cstm_acnt_input"
                                placeholder="name"
                            />
                        </div>
                        <div className="input_wrap_accnt_row">
                            <label className='lght_txtmgnt'>Medical Center Email</label>
                            <Input
                                type="text"
                                className="form-control cstm_acnt_input"
                                placeholder="name"
                            />
                        </div>
                    </div>
                    <div class="input_row_mgnt">
                        <div className="input_wrap_accnt_row">
                            <label className='lght_txtmgnt'>Location</label>
                            <Input
                                type="text"
                                className="form-control cstm_acnt_input"
                                placeholder="name"
                            />
                        </div>
                        <div className="input_wrap_accnt_row wthout_label">
                            <Input
                                type="text"
                                className="form-control cstm_acnt_input"
                                placeholder="name"
                            />
                        </div>
                    </div>
                    <div className="input_wrap_accnt wthout_label">
                        <Input
                            type="text"
                            className="form-control cstm_mgnt_input_clmn"
                            placeholder="name"
                        />
                    </div>
                    <div className="input_wrap_accnt_mgnt">
                        <label className='lght_txtmgnt'>Password</label>
                        <Input
                            type="text"
                            className="form-control cstm_mgnt_input_clmn"
                            placeholder="name"
                        />
                    </div>
                     <div className="accnt_btn_wrap">
                      <button class="mnt_btn accnt_btn sign_btn_wrd">Update</button>
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

export default connect(mapStateToProps)(ManagementSettingUpdate);
