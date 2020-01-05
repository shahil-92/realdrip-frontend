import React from 'react';
import { connect } from 'react-redux';
import WardSignInActivation from '../../components/Ward/wardSignInActivation'

export class ManagementSignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
    };
  }

  handleClick = () =>{
    this.props.history.push('/signup')
  }
  handleWardSignIn = () =>{
    this.props.history.push('/management-dashboard')
 }

  render() {
    return (
        <WardSignInActivation 
            welcomeHeading="Welcome Back"
            secondHeading="Management Sign In" 
            buttonLabel="Sign In"
            onClickAnchr={this.handleClick}
            onClick={this.handleWardSignIn}
            // type
            // holder
            // onChange
            // onKeyPress
            // id
            // name
        />
    );
  }
}

const mapStateToProps = (state) => ({
   // addingUserStarted: state.user.createAdmin.addingUserStarted,
  // addingUserResolved: state.user.createAdmin.addingUserResolved,
  // addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(ManagementSignIn);
