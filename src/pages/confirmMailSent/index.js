import React from 'react';
import MAILSENT_POPUP from '../../components/popUp/mailSentPopUp';

export const ConfirmMailSent = (props) => {
    return (
        <MAILSENT_POPUP
          src={require('../../assets/Images/circle-with-check-symbol.svg')}
          title="Confiramtion mail sent"
          subHeading="Check your email to complete Registration"
          subHeadingClass="check-mail"
        >
          <div className="cant-find">Can't fint mail ? <a className="resend-anchr">Resend</a> confirmation mail</div>
        </MAILSENT_POPUP>
    );
}

export default ConfirmMailSent;
