import React from 'react';
import { connect } from 'react-redux';
import Input from '../../components/inputComponent'
import { Link } from 'react-router-dom'
export class PasswordRecovery extends React.Component {
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
               
                  <div className="check-mail">Medical Center Email</div>
                  <div className="input-wrap"> 
                  <Input
                    type="text"
                    className="form-control cstm_pswrecovr_input"
                    placeholder="name"
                  />
                  </div>
                  <div className="password-recovry-wrap">
                        <button class="password-recovry-btn" onClick={this.handleClick}>Submit</button>
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

export default connect(mapStateToProps)(PasswordRecovery);
