import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import POPUP from '../../components/popUp'
export class DeleteOperationPopUp extends React.Component {
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
          src={require('../../assets/Images/rubbish-bin-delete-button.svg')} 
          title="Delete Operation"
          subHeading="Are you sure you want to delete this opertaion ?, all stored information about this operation will ne erased." 
          subHeadingClass="delete-oprtn-email-sent-wrap"
          titleClass="mail-sent-wrap" 
        >
          <div className="password-recovry-wrap optn-btn-wrap">
              <button class="password-recovry-btn" onClick={this.handleClick}>Yes delete</button>
              <button class="password-recovry-btn" onClick={this.handleClick}>No</button>
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

export default connect(mapStateToProps)(DeleteOperationPopUp);
