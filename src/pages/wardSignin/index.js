import React from 'react';
import { connect } from 'react-redux';
import WardSignInActivation from '../../components/wardSignInActivation'
import * as CommonHelper from '../../utils'
import { toast, ToastContainer } from 'react-toastify';

export class WardSignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "ogunniyitunmise@gmail.com",
      password: "CWh04BkXB2",
      ward_user: "",
      errorMessage:""
      // "email": "ogunniyitunmise@gmail.com",
      // "password": "CWh04BkXB2",
      // "userType": "ward_user"
    };
  }
  static getDerivedStateFromProps(props, state){
    const {changingStatus , wardLogin} = props && props.loginResponse
    const {token, user} = wardLogin
    if(changingStatus === 'success'){
      localStorage.setItem('token', token);
      CommonHelper.isToster(toast.success, 'Login Has Been Successfull');
      props.history.push('/ward-dashboard')
      return
    }else{
      return null
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({errorMessage:""})
  }
  handleClick = () =>{
     this.props.history.push('/ward-activation')
  }
  handleWardSignIn = () =>{
    const {email, password} = this.state;
    // !CommonHelper.isValidPassword(password)
    if(!CommonHelper.validateEmail(email)){
      this.setState({errorMessage: "please enter valid Email and Password" })
    }else if(!CommonHelper.validateEmail(email)){
      this.setState({errorMessage: "please enter valid Email" })
    }
    // else if(!CommonHelper.isValidPassword(password)){
    //   this.setState({errorMessage: "please enter valid Password" })
    // }
    let data = {
      email: email,
      password: password,
      userType: "ward_user"
    }
    this.props.dispatch({ type: 'WARD_LOGIN_SUBMIT', payload: data })
 }

  render() {
    console.log('=-=-==this.state===',this.props) 
    const {errorMessage} = this.state;
    return (
      <div>
        <WardSignInActivation 
            welcomeHeading="Welcome Back"
            secondHeading="Ward Sign In" 
            buttonLabel="Sign In"
            redirectLink="Activate"
            onClickAnchr={this.handleClick}
            onClick={this.handleWardSignIn}
            onChange={this.handleChange}
            errorMessage={errorMessage}
        />
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginResponse: state.WardLogin
})

export default connect(mapStateToProps)(WardSignIn);
