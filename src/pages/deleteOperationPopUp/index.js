import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
        <div className="popup-wrap">
              <div class="pop-container">
                <div className="circle_wrap"><img src={require('../../assets/Images/rubbish-bin-delete-button.svg')} /></div>
                <h4 className="mail-sent-wrap">Delete Operation</h4>
                <div className="delete-oprtn-email-sent-wrap">Are you sure you want to delete this opertaion ?, all stored information about this operation will ne erased.</div>
                <div className="password-recovry-wrap optn-btn-wrap">
                    <button class="password-recovry-btn" onClick={this.handleClick}>Yes delete</button>
                    <button class="password-recovry-btn" onClick={this.handleClick}>No</button>
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

export default connect(mapStateToProps)(DeleteOperationPopUp);
