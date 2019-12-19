import React from 'react';
import POPUP from '../../components/popUp';

export const PasswordUpdatedPopUp = (props) => {
    return (
      <POPUP 
        src={require('../../assets/Images/circle-with-check-symbol.svg')} 
        title="Password Successfully Updated"
        titleClass="mail-sent-wrap" 
      >
        <div className="password-recovry-wrap">
            <button class="password-recovry-btn" onClick={this.handleClick}>Sign In</button>
        </div>
      </ POPUP>
    );
  }

export default PasswordUpdatedPopUp;
