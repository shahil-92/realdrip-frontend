import React from 'react';
import Input from '../../components/inputComponent'

export const PasswordRecovery = (props) => {
    return (
        <div className="popup-wrap">
              <div class="pop-container">
                <div className="circle_wrap"><img src={require('../../assets/Images/lock.svg')} /></div>
                <h4 className="mail-sent-wrap">Password Recovery</h4>               
                  <div className="check-mail">Medical Center Email</div>
                  <div className="input-wrap"> 
                  <Input
                    type="text"
                    className="form-control cstm_pswrecovr_input"
                    placeholder="name"
                  />
                  </div>
                  <div className="password-recovry-wrap">
                        <button class="password-recovry-btn" onClick={this.handleClick}>Submit</button>
                  </div>

             </div>
        </div>
    );
}

export default PasswordRecovery;
