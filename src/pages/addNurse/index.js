import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../components/inputComponent'
// import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import HEADER from '../../components/Headers/header'

export class AddNurse extends React.Component {
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
            <div className="logo"><img src={require('../../assets/Images/sort-button-with-three-lines.svg')}/></div>
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
             <div className="main_wrapper_mgnt_setng">
                    <div className="mgmnt_input_wrap_main">
                    <div className="mgnt_heading_setting">
                        <h4 class="head_accnt_h3">Add Nurse</h4>
                    </div>
                    <div className="input_wrap_accnt wthout_label">
                    <label className='lght_txtmgnt'>Name</label>
                        <Input
                            type="text"
                            className="form-control cstm_mgnt_input_clmn"
                            placeholder="name"
                        />
                    </div>
                    <div className="input_wrap_accnt wthout_label">
                    <label className='lght_txtmgnt'>Hospital ID no.</label>
                        <Input
                            type="text"
                            className="form-control cstm_mgnt_input_clmn"
                            placeholder="name"
                        />
                    </div>
                    <div className="input_wrap_accnt wthout_label">
                    <label className='lght_txtmgnt'>Attach a file</label>
                        <Input
                            type="file"
                            className="form-control cstm_add_file custom-file-input"
                            placeholder="name"
                        />
                        <span className="user_input_icon"><i class="fa fa-user-plus cstm_user_icon"></i></span>
                    </div>
                  
                     <div className="accnt_btn_wrap">
                      <button class="mnt_btn">Add Nurse</button>
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

export default connect(mapStateToProps)(AddNurse);
