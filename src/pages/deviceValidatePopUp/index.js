import React from 'react';
import POPUP from '../../components/popUp/popUp'

const DeviceValidatePopUp = (props) => {
    return (
          <POPUP 
            src={require('../../assets/Images/circle-with-check-symbol.svg')} 
            title="Device Validate"
            subHeading="Your RealDrip ID (First device ID) sent to your email after registration" 
            subHeadingClass="device-valiadte-email-sent-wrap"
            titleClass="mail-sent-wrap" 
        >
           <div className="password-recovry-wrap">
                <button class="password-recovry-btn">Proceed to registration</button>
            </div>
          </ POPUP>
    )
}

export default DeviceValidatePopUp;
