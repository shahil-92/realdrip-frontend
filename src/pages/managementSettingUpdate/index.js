import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Input from "../../components/inputComponent";
// import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import HEADER from "../../components/Headers/header";
import LEFT_HEADER from "../../components/Headers/leftHeader";

export class ManagementSettingUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
      showMenu: false
    };
  }

  handleClick = () => {
    this.props.history.push("/ward-activation");
  };
  handleWardSignIn = () => {
    this.props.history.push("/ward-dashboard");
  };
  handleClickToggle = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <div className="main_wrapper ">
        <div className="inner_dshbrd_wrap">
          <LEFT_HEADER onClick={this.handleClickToggle} />
          <div className="right_dashboard">
            <HEADER headerName="management" />
            <div class="mid-section-dshbrd">
              <div className="main_wrapper_mgnt_setng">
                <div className="mgmnt_input_wrap_main">
                  <div className="mgnt_heading_setting">
                    <h4 class="head_accnt_h3">Management Account Settings</h4>
                  </div>
                  <div class="input_row_mgnt">
                    <div className="input_wrap_accnt_row">
                      <label className="lght_txtmgnt">
                        Medical Center Name
                      </label>
                      <Input
                        type="text"
                        className="form-control cstm_acnt_input"
                        placeholder="name"
                      />
                    </div>
                    <div className="input_wrap_accnt_row">
                      <label className="lght_txtmgnt">
                        Medical Center Email
                      </label>
                      <Input
                        type="text"
                        className="form-control cstm_acnt_input"
                        placeholder="name"
                      />
                    </div>
                  </div>
                  <div class="input_row_mgnt">
                    <div className="input_wrap_accnt_row">
                      <label className="lght_txtmgnt">Location</label>
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
                    <label className="lght_txtmgnt">Password</label>
                    <Input
                      type="text"
                      className="form-control cstm_mgnt_input_clmn"
                      placeholder="name"
                    />
                  </div>
                  <div className="accnt_btn_wrap">
                    <button class="mnt_btn accnt_btn sign_btn_wrd">
                      Update
                    </button>
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

const mapStateToProps = state => ({
  // addingUserStarted: state.user.createAdmin.addingUserStarted,
  // addingUserResolved: state.user.createAdmin.addingUserResolved,
  // addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(ManagementSettingUpdate);
