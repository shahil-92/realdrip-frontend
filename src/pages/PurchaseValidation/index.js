import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import DeviceValidatePopUp from '../deviceValidatePopUp'

export class PurchaseValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
      showpopUp: false
    };
  }

  handleClick() {
    this.props.history.push("/signup");
  }
  handleClickWard() {
    // this.props.history.push("/ward-signin");
    this.setState({showpopUp: true})
  }

  render() {
    const { showpopUp } = this.state
    return (
      <div className="main_wrapper min-100">
        <div className="heading_wrapper center_colmn_wise">
          <div className="home_page_img_wrap">
            <img src={require("../../assets/Images/logo.png")} />
          </div>
          <h2>Purchase Validation</h2>
        </div>
        <div className="home_login_to center_colmn_wise bottom170">
          <h3 className="head_enter_id">
            Enter the device ID on one of your purchase RealDrip devices
          </h3>
          <div className="enter_device_id_input_wrap">
            <input className="form-control height40" placeholder="Device ID" />
          </div>
          <div className="btn_wrapper_purchase">
            <button
              className="wrd_btn margin0"
              onClick={e => this.handleClickWard(e)}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="bottm_line_wrap_purchase">
          <span className="text-color-ward-sign-botm text-black">
            Already have an management account ?
          </span>
          <a
            onClick={() => {
              this.props.history.push("/management-signin");
            }}
          >
            Sign In
          </a>
        </div>
        {showpopUp && <DeviceValidatePopUp proceedClick={()=>{this.props.history.push('/signup')}}/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // addingUserStarted: state.user.createAdmin.addingUserStarted,
  // addingUserResolved: state.user.createAdmin.addingUserResolved,
  // addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(PurchaseValidation);
