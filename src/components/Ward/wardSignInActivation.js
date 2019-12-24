import React from 'react';
import Input from '../inputComponent'
 
const WardSignInActivation = (props) =>{
  const {
    welcomeHeading, secondHeading, buttonLabel, redirectLink, 
    onClick, type, holder, min, onChange, onKeyPress, id, name, 
    data, disabled, onClickAnchr, children,errorMessage, src,imgClass,
    bottomText
  } = props;
  return(
    <div className="main_wrapper ward_main_wrap">
    <div className="ward_left_banner">
       <img src={src} className={imgClass}/>    
    </div>
    <div className="ward_sign_wrap">
        <div className="inner_wrap">
        <div className="ward_heading_wrap">
            <h4 className="head_ward_h4">{welcomeHeading}</h4>
            <h2 className="head_ward_h2">{secondHeading}</h2>
        </div>
        {children}
        <div className="ward_input_wrap">
         <div className="input_row">
            <div className="input_wrap">
                <label>Ward Username</label>
                <Input
                    type={type}
                    className="form-control cstm-input"
                    placeholder={holder}
                    data={props}
                    id={id}
                    min={min}
                    name="email"
                    onChange={onChange}
                    disabled={disabled}
                    onKeyPress={onKeyPress}
                />
                {errorMessage.email && <div className="error-message">{errorMessage.email}</div>}
            </div>
            <div className="input_wrap">
                <label>Password</label>
                <Input
                    type={type}
                    className="form-control cstm-input"
                    placeholder={holder}
                    data={props}
                    id={id}
                    min={min}
                    name="password"
                    onChange={onChange}
                    disabled={disabled}
                    onKeyPress={onKeyPress}
                />
                {errorMessage.password && <div className="error-message">{errorMessage.password}</div>}
                <span>Forget Password?</span>
            </div>
                
            </div>
            
        </div>
        <div className="ward_btn_wrap">
        {/* <div className="error_message">{errorMessage}</div> */}
         <button className="sign_btn_wrd" onClick={onClick}>{buttonLabel}</button>
        </div>
    </div>
    {redirectLink && <div className="ward_bottom">
          <span className="text-color-ward-sign-botm">{bottomText} ?</span> <a onClick={onClickAnchr}>{redirectLink}</a>
        </div>}
    </div>
</div>
  )
}


export default WardSignInActivation;
