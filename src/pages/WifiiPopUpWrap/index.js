import React from "react";
import Input from "../../components/inputComponent";
import WifiiPopUp from "../../components/popUp/WifiiPopUp";
import WifiiAvailableNetworks from "../../components/popUp/WifiiAvailableNetworks";
// import MAILSENT_POPUP from '../../components/popUp/mailSentPopUp'

export const WifiiPopUpWrap = props => {
  const { PopUpClick } = props;
  return (
    <WifiiPopUp
      ArrowHeadingWrapClass="conted_wraper wifii_network"
      topHeading="Wifi networks"
      mainIcon={require("../../assets/Images/wifi-signal-waves.svg")}
      heading="Scanning for wi-fi"
      subHeading="Available Networks"
      PopUpClick={PopUpClick}
    >
      <WifiiAvailableNetworks
        leftIconSrc={require("../../assets/Images/computer.svg")}
        text="Hospital Network"
        rightIconSrc={require("../../assets/Images/wifi-medium-signal-symbol.svg")}
      />
      <WifiiAvailableNetworks
        leftIconSrc={require("../../assets/Images/computer.svg")}
        text="Ward B wifii"
        rightIconSrc={require("../../assets/Images/wifi-medium-signal-symbol.svg")}
      />
      <WifiiAvailableNetworks
        leftIconSrc={require("../../assets/Images/smartphone-dock.svg")}
        text="Tunde's Phone"
        rightIconSrc={require("../../assets/Images/wifi-medium-signal-symbol.svg")}
      />
    </WifiiPopUp>
  );
};
export default WifiiPopUpWrap;
