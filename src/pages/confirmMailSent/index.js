import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import HEADER from '../../components/header'
export class ConfirmMailSent extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false
    };
  }

  handleClick = () =>{
    this.setState({showMenu : !this.state.showMenu})
  }
  handleRedirectClick = () =>{
    this.props.history.push('/operation-detail')
 }

  render() {
    return (
        <div className="popup-wrap">
              <div class="pop-container">
                <div className="circle_wrap"><img src={require('../../assets/Images/circle-with-check-symbol.svg')} /></div>
                <h4 className="mail-sent-wrap">Confiramtion mail sent</h4>
                <div className="check-mail">Check your email to complete</div>
                <div className="check-mail">Registration</div>
              <div className="cant-find">Can't fint mail ? <a className="resend-anchr">Resend</a> confirmation mail</div>
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

export default connect(mapStateToProps)(ConfirmMailSent);
