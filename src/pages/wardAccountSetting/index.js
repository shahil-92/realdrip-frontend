import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../components/inputComponent'
// import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import HEADER from '../../components/header'
export class WardAccountSetting extends React.Component {
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
                <Link to="/ward-dashboard" ><li><img src={require('../../assets/Images/menu1_active.png')} /> </li></Link>
                <Link to="/ward-operation"><li><img src={require('../../assets/Images/menu4.png')} /></li></Link>
                <Link to="/ward-device"><li><img src={require('../../assets/Images/menu2.png')} /></li></Link>
                <Link to="/ward-nurse"><li><img src={require('../../assets/Images/menu5.png')} /></li></Link>
                <Link to="/ward-setting"><li><img src={require('../../assets/Images/menu3.png')} /></li></Link>
              </ul>
            </div>
         </div>
         <div className="right_dashboard">
            <HEADER headerName="ward"/>
           
            <div class="mid-section-dshbrd">
            <div className="main_wrapper ward_main_wrap">
                <div class="accnt_signin_wrap">
                    <div className="ward_heading_wrap">
                        <h4 class="head_accnt_h3">Account Settings</h4>
                    </div>
                    <div className="accont_input_wrap_main">
                    <div class="input_column">
                        <div className="input_wrap_accnt">
                            <label>Ward Username</label>
                            <Input
                                type="text"
                                className="form-control cstm_acnt_input"
                                placeholder="name"
                            />
                        </div>
                        <div className="input_wrap_accnt">
                            <label>Password</label>
                            <Input
                                type="text"
                                className="form-control cstm_acnt_input"
                                placeholder="name"
                            />
                        </div>
                        </div>
                        <div className="accnt_btn_wrap">
                        <button class="mnt_btn accnt_btn sign_btn_wrd">Login</button>
                        </div>

                        <div className="ward_bottom_setting">
                            <h4>To change the Password of this account , do login to 
                                management account or inform the management.
                            </h4>
                            <div className="accnt_btn_wrap">
                            <button class="mnt_btn accnt_btn sign_btn_wrd">login to management</button>
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

export default connect(mapStateToProps)(WardAccountSetting);
