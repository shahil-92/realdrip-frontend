import React from "react";
import { connect } from "react-redux";
import Input from "../../components/inputComponent";
import { Link } from "react-router-dom";
import HEADER from "../../components/Headers/header";
import LEFT_HEADER from "../../components/Headers/leftHeader";
import * as MetaData from "../../utils/metaData";
import EditMailSent from "../EditMailSent"
import DETAILMENU from "../../components/Headers/detailMenu";
export class WardAccountSetting extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
      showMenu: false,
      showPopUp: false
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
  handleUpdate = () => {
    this.setState({ showPopUp: true })
  }
  handleCloseModal = () => {
    this.setState({ showPopUp: false})
  }

  render() {
    const {showPopUp} = this.state
    return (
      <div className="main_wrapper ">
        <div className="inner_dshbrd_wrap">
          <LEFT_HEADER
            onClick={this.handleClickToggle}
            LEFT_HEADER_DATA={MetaData.MANAGEMENT_LEFT_HEADER_DATA}
            {...this.props}
          />
          <div className="right_dashboard">
            <HEADER headerName="management" />
            <div class="mid-section-dshbrd">
              {this.state.showMenu && (
                <DETAILMENU
                  LEFT_HEADER_DATA={MetaData.MANAGEMENT_LEFT_HEADER_DATA}
                  {...this.props}
                />
              )} 
              <div className="main_wrapper_mgnt_setng">
                <div className="mgmnt_input_wrap_main">
                  <div className="mgnt_heading_setting margin-cstm-mgnt-setting">
                    <h4 class="head_accnt_h3">Management Account Settings</h4>
                  </div>
                  <div class="input_row_mgnt">
                    <div className="input_wrap_accnt_row">
                      <label className="lght_txtmgnt">
                        Medical Center Name
                      </label>
                      <Input
                        type="text"
                        className="form-control cstm_acnt_input fillbg font-size12"
                        placeholder="lkeja general hospital"
                      />
                    </div>
                    <div className="input_wrap_accnt_row">
                      <label className="lght_txtmgnt">
                        Medical Center Email
                      </label>
                      <Input
                        type="text"
                        className="form-control cstm_acnt_input fillbg font-size12"
                        placeholder="admin@lakejageneralhospital.com"
                      />
                    </div>
                  </div>
                  <div class="input_row_mgnt">
                    <div className="input_wrap_accnt_row">
                      <label className="lght_txtmgnt">Location</label>
                      <Input
                        type="text"
                        className="form-control cstm_acnt_input fillbg font-size12"
                        placeholder="Nigeria"
                      />
                    </div>
                    <div className="input_wrap_accnt_row wthout_label">
                      <Input
                        type="text"
                        className="form-control cstm_acnt_input fillbg font-size12"
                        placeholder="Lagos"
                      />
                    </div>
                  </div>
                  <div className="input_wrap_accnt wthout_label">
                    <Input
                      type="text"
                      className="form-control cstm_mgnt_input_clmn fillbg font-size12"
                      placeholder="17, GRA ikeja Lahos, Nigeria"
                    />
                  </div>
                  <div className="input_wrap_accnt_mgnt">
                    <label className="lght_txtmgnt">Password</label>
                    <Input
                      type="text"
                      className="form-control cstm_mgnt_input_clmn fillbg font-size12"
                      placeholder="**********"
                    />
                  </div>
                  <div className="accnt_btn_wrap">
                      <button class="mnt_btn accnt_btn sign_btn_wrd" onClick={()=>this.handleUpdate()}>
                        Update
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {showPopUp && <EditMailSent ClosePopUp={()=>this.handleCloseModal()}/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // addingUserStarted: state.user.createAdmin.addingUserStarted,
  // addingUserResolved: state.user.createAdmin.addingUserResolved,
  // addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(WardAccountSetting);
