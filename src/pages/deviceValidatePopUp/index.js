import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
export class DeviceValidatePopUp extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false
    };
  }

  handleClick = () =>{
    // this.setState({showMenu : !this.state.showMenu})
  }
  handleRedirectClick = () =>{
    this.props.history.push('/operation-detail')
 }

  render() {
    return (
        <div className="popup-wrap">
              <div class="pop-container">
                <div className="circle_wrap"><img src={require('../../assets/Images/circle-with-check-symbol.svg')} /></div>
                <h4 className="mail-sent-wrap">Device Validate</h4>
                <div className="device-valiadte-email-sent-wrap">Your RealDrip ID (First device ID) sent to your email after registration</div>
                <div className="password-recovry-wrap">
                    <button class="password-recovry-btn" onClick={this.handleClick}>Proceed to registration</button>
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

export default connect(mapStateToProps)(DeviceValidatePopUp);
