import React from 'react';
import Input from '../../components/inputComponent'
// import MAILSENT_POPUP from '../../components/popUp/mailSentPopUp'

export const WifiiPopUp = (props) => {
    return (
 
       <div className="popup-wrap">
       <div class="wifii-pop-container">
          <div className="conted_wraper"> <i class="fa fa-angle-left cstm-left-angle"></i> Connect to</div>
          <div className="circle_wrap"><img src={require('../../assets/Images/computer.svg')} /></div>
          <h4 className="mail-sent-wrap">Hospital Internet</h4>

        <div className="input_wrap_accnt_mgnt">
            <label className='lght_txtmgnt_wifii_input'>Password</label>
            <Input
                type="text"
                className="form-control cstm_mgnt_input_clmn"
                placeholder="name"
            />
        </div>
        <div className="accnt_btn_wrap">
            <button class="btn-add-wifii-connect">Connect</button>
        </div>
        
       </div>
      </div>
    )
}
export default WifiiPopUp
