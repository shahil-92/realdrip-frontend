import React from 'react';
import MAILSENT_POPUP from '../../components/popUp/mailSentPopUp'

export const RecoveryMailSent = (props) => {
    return (
      <MAILSENT_POPUP
        src={require('../../assets/Images/lock.svg')}
        title="Password Recovery"
        subHeadingWithImg="Password recovery mail sent"
      >
        <div className="cant-find-recovr">Check your email <a className="resend-anchr">abc@abc.com</a> to Reset Password </div>
      </MAILSENT_POPUP>
    )
}
export default RecoveryMailSent
