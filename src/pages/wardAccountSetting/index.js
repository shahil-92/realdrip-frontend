import React from 'react';
import { connect } from 'react-redux';
import Input from '../../components/inputComponent'
import { Link } from 'react-router-dom'
import HEADER from '../../components/Headers/header'
import DETAILMENU from '../../components/Headers/detailMenu'
import LEFT_HEADER from '../../components/Headers/leftHeader'
import * as MetaData from '../../utils/metaData'
export class WardAccountSetting extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
      showMenu:false
    };
  }

  handleClick = () =>{
     this.props.history.push('/ward-activation')
  }
  handleWardSignIn = () =>{
    this.props.history.push('/ward-dashboard')
 }
 handleClickToggle = () =>{
  this.setState({showMenu : !this.state.showMenu})
}
  render() {
    return (
        <div className="main_wrapper wrapper-100vh">
        <div className="inner_dshbrd_wrap">
         <LEFT_HEADER onClick={this.handleClickToggle} LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA} {...this.props}/>
         <div className="right_dashboard">
            <HEADER headerName="Ward"/>     
            <div class="mid-section-dshbrd mid-section-dshbrd-100vh">
            {this.state.showMenu && <DETAILMENU LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA} {...this.props}/>}
            
            <div className="main_wrapper_ward_accnt_setng">
                <div className="ward_heading_wrap">
                    <h4 class="head_accnt_h3">Account Settings</h4>
                </div>
                <div class="accnt_signin_wrap">
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
                            <button class="accnt_btn_login_mgnt">login to management</button>
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
