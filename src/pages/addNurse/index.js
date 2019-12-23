import React from 'react';
import { connect } from 'react-redux';
import Input from '../../components/inputComponent'
import HEADER from '../../components/Headers/header'
import LEFT_HEADER from '../../components/Headers/leftHeader'

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
         <LEFT_HEADER onClick={this.handleClick}/>
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
