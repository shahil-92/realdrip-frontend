import React from 'react';
import PropTypes from 'prop-types';
import Input from '../inputComponent'

export const WifiiPopUp = (props) => {
    const { mainIcon, heading, subHeading, placeholder, children, visibilityIcon, btnText, btnClick  } = props
    return (
       <div className="popup-wrap">
       <div class="wifii-pop-container">
          <div className="conted_wraper"> <i class="fa fa-angle-left cstm-left-angle"></i>Connect to</div>
          <div className="circle_wrap"><img src={mainIcon} /></div>
            <h4 className="mail-sent-wrap">{heading}</h4>
            <label className='lght_txtmgnt_wifii_input'>{subHeading}</label>
           {placeholder && <div className="input_wrap_wifii">
                <Input
                    type="text"
                    className="form-control cstm_wifii_input_clmn"
                    placeholder="name"
                />
                <img className="visiblity_img" src={visibilityIcon} />
            </div>}
            {children}
            {btnText && <div className="accnt_btn_wrap">
                <button class="btn-add-wifii-connect" onClick={btnClick}>{btnText}</button>
            </div>}
       </div>
      </div>
    )
}
WifiiPopUp.propTypes = {
    mainIcon: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    placeholder: PropTypes.string,
    visibilityIcon: PropTypes.string,
    btnText: PropTypes.string,
  };

export default WifiiPopUp
