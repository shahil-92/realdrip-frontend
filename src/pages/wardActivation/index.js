import React from 'react';
import { connect } from 'react-redux';
import WardSignInActivation from '../../components/Ward/wardSignInActivation'

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
            src={require('../../assets/Images/ward_activate.png')}
            imgClass="img-left-activation"
            bottomText="Already Activated your ward yet"
        >
        <div className="activation_sent">
          <div className="activation-txt">Enter detail as sent your mail, or click the activation link in your mail</div>
        </div>
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
