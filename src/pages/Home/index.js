import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
    };
  }

  handleClick(){
     this.props.history.push('/signup')
  }
  handleClickWard(){
    this.props.history.push('/ward-signin')
  }

  render() {
    return (
        <div className="main_wrapper ">
            <div className="heading_wrapper center_colmn_wise">
                <div className="home_page_img_wrap"><img src={require('../../assets/Images/logo.png')} /></div>
                <h2>Infusion management</h2>
                <h2>system</h2>
            </div>
            <div class="home_login_to center_colmn_wise">
                <h3 class="head_login_to">Login to</h3>
                <div className="btn_wrapper">
                    <button class="mnt_btn_home" onClick={(e) => this.handleClick(e)}>Management</button>
                    <button class="wrd_btn" onClick={(e) => this.handleClickWard(e)}>Ward</button>
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

export default connect(mapStateToProps)(Home);
