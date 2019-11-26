import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WardSignInActivation from '../../components/wardSignInActivation'
// import { Redirect } from 'react-router-dom';
// import "./signup.css";
// import View from './view';
// import validateSignupInputs from './validation';
// import { createAdminUser } from '../../actions/user/auth';

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
