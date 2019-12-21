import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WardSignInActivation from '../../components/Ward/wardSignInActivation'
// import { Redirect } from 'react-router-dom';
// import "./signup.css";
// import View from './view';
// import validateSignupInputs from './validation';
// import { createAdminUser } from '../../actions/user/auth';

export class WardActivation extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
      formErrors:{
        email:'',
        password:''
      }
    };
  }

  handleClick = () => {
     this.props.history.push('/ward-signin')
  }

  render() {
    const {formErrors} = this.state;
    return (
        <WardSignInActivation 
            welcomeHeading="Welcome to RealDrip Ward account"
            secondHeading="Ward Activation" 
            buttonLabel="Create account"
            redirectLink="Sign In"
            onClickAnchr={this.handleClick}
            errorMessage={formErrors}
        >
        <div className="activation_sent"></div>
        </WardSignInActivation>
    );
  }
}

const mapStateToProps = (state) => ({
   // addingUserStarted: state.user.createAdmin.addingUserStarted,
  // addingUserResolved: state.user.createAdmin.addingUserResolved,
  // addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(WardActivation);
