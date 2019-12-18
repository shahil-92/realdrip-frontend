import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import POPUP from '../../components/popUp'
export class PasswordUpdatedPopUp extends React.Component {
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
      <POPUP 
        src={require('../../assets/Images/circle-with-check-symbol.svg')} 
        title="Password Successfully Updated"
        titleClass="mail-sent-wrap" 
      >
        <div className="password-recovry-wrap">
            <button class="password-recovry-btn" onClick={this.handleClick}>Sign In</button>
        </div>
      </ POPUP>
    );
  }
}

const mapStateToProps = (state) => ({
   // addingUserStarted: state.user.createAdmin.addingUserStarted,
  // addingUserResolved: state.user.createAdmin.addingUserResolved,
  // addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(PasswordUpdatedPopUp);
