import React from 'react';
import Input from '../../components/inputComponent'
import WifiiPopUp from '../../components/popUp/WifiiPopUp'
import WifiiAvailableNetworks from '../../components/popUp/WifiiAvailableNetworks'
// import MAILSENT_POPUP from '../../components/popUp/mailSentPopUp'
 
export const WifiiPopUpWrap = (props) => {
    return (
        <WifiiPopUp
            ArrowHeadingWrapClass="conted_wraper wifii_network"
            topHeading="Wifi networks"
            mainIcon ={require('../../assets/Images/wifi-signal-waves.svg')} 
            heading = "Scanning for wi-fi"
            subHeading = "Available Networks"
        >
              <WifiiAvailableNetworks 
                leftIconSrc={require('../../assets/Images/computer.svg')}
                text="Scanning for wifi"
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
