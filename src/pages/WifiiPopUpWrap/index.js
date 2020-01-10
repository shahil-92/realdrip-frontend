import React from 'react';
import Input from '../../components/inputComponent'
import WifiiPopUp from '../../components/popUp/WifiiPopUp'
import WifiiAvailableNetworks from '../../components/popUp/WifiiAvailableNetworks'
// import MAILSENT_POPUP from '../../components/popUp/mailSentPopUp'

export const WifiiPopUpWrap = (props) => {
    return (
        <WifiiPopUp
            mainIcon ={require('../../assets/Images/wifi-signal-waves.svg')} 
            heading = "Hospital Internet"
            subHeading = "Available Networks"
        >
              <WifiiAvailableNetworks 
                leftIconSrc={require('../../assets/Images/computer.svg')}
                text="Hospital Internet"
                rightIconSrc={require('../../assets/Images/wifi-medium-signal-symbol.svg')}
            />
              <WifiiAvailableNetworks 
                leftIconSrc={require('../../assets/Images/computer.svg')}
                text="Hospital Internet"
                rightIconSrc={require('../../assets/Images/wifi-medium-signal-symbol.svg')}
            />
              <WifiiAvailableNetworks 
                leftIconSrc={require('../../assets/Images/computer.svg')}
                text="Hospital Internet"
                rightIconSrc={require('../../assets/Images/wifi-medium-signal-symbol.svg')}
            />
        </WifiiPopUp>
     
    )
}
export default WifiiPopUpWrap
