import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
export class RecoveryMailSent extends React.Component {
  constructor() {
    super();
    this.state = {
      showRecoveryForm:false
    };
  }

  handleClick = () =>{
    this.setState({showRecoveryForm : true})
  }
 
  render() {
    return (
        <div className="popup-wrap">
              <div class="pop-container">
                <div className="circle_wrap"><img src={require('../../assets/Images/lock.svg')} /></div>
                <h4 className="mail-sent-wrap">Password Recovery</h4>
                <div className="recovr-mail-sent-wrap"><h4 className="mail-sent-wrap">Password recovery mail sent</h4><img className="img-green-recovry" src={require('../../assets/Images/circle-with-check-symbol-green.svg')} /></div>
                <div className="cant-find-recovr">Check your email <a className="resend-anchr">abc@abc.com</a> to Reset Password </div>
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

export default connect(mapStateToProps)(RecoveryMailSent);
