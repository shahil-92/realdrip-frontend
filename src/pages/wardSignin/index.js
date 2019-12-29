import React from 'react';
import { connect } from 'react-redux';
import WardSignInActivation from '../../components/Ward/wardSignInActivation'
import * as CommonHelper from '../../utils'
import { toast, ToastContainer } from 'react-toastify';
import Spinner from '../../components/common/spinner'
export class WardSignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "ogunniyitunmise@gmail.com",
      password: "CWh04BkXB2",
      ward_user: "",
      errorMessage:"",
      formErrors:{
        email:'',
        password:'',
        
      },
      isloading: false,
    };
  }
  static getDerivedStateFromProps(props, state){
    console.log('===props=',props.loginResponse)
    console.log('=====state=',state)
    const {changingStatus , wardLogin} = props && props.loginResponse
    const {token, user} = wardLogin
    if(changingStatus === 'success'){
      localStorage.setItem('token', token);
      // state.setState({isloading: false})
      // state.isloading = false
      CommonHelper.isToster(toast.success, 'Login Has Been Successfull');
      props.history.push('/ward-dashboard')
      return
    }else{
      return null
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    const {formErrors} = this.state
    this.setState({ [name]: value })
    CommonHelper.handleLoginValidation(formErrors, name, value)
  }
  handleClick = () =>{
     this.props.history.push('/ward-activation')
  }
  handleWardSignIn = () =>{
    const {email, password} = this.state;
    this.setState({isloading: true})
    // !CommonHelper.isValidPassword(password)
    // if(this.state.formErrors.email === '' && this.state.formErrors. === ''){
    // }
    let data = {
      email: email,
      password: password,
      userType: "ward_user"
    }
    this.props.dispatch({ type: 'WARD_LOGIN_SUBMIT', payload: data })
    }
  
  render() {
    console.log('=-=-==this.state===',this.state) 
    const {formErrors, isloading} = this.state;
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
            errorMessage={formErrors}
            src={require('../../assets/Images/ward_sign_in.png')}
            imgClass="img-left-sigin"
            bottomText="Haven't Activated your ward yet"
        /> 
        <ToastContainer />
        <div className="loaderWraper">
           <Spinner display={isloading}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginResponse: state.WardLogin
})

export default connect(mapStateToProps)(WardSignIn);
