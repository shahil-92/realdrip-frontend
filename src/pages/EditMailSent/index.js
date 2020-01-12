import React from 'react';
import MAILSENT_POPUP from '../../components/popUp/mailSentPopUp';

export const EditMailSent = (props) => {
    const { ClosePopUp } = props
    return (
        <MAILSENT_POPUP
          src={require('../../assets/Images/circle-with-check-symbol.svg')}
          title="Account edit mail sent"
          subHeading="Check your email to complete the change"
          subHeadingClass="check-mail"
          ClosePopUp = {ClosePopUp}
        >
          <div className="cant-find">Can't fint mail ? <a className="resend-anchr">Resend</a> confirmation mail</div>
        </MAILSENT_POPUP>
    );
}

export default EditMailSent;
