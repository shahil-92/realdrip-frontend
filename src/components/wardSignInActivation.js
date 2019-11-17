import React from 'react';
import Input from './inputComponent'

const WardSignInActivation = (props) =>{
  const {
    welcomeHeading, secondHeading, buttonLabel, redirectLink, 
    onClick, type, holder, min, onChange, onKeyPress, id, name, 
    data, disabled, onClickAnchr, children
  } = props;

  return(
    <div className="main_wrapper ward_main_wrap">
    <div className="ward_left_banner">    
    </div>
    <div class="ward_sign_wrap">
        <div className="ward_heading_wrap">
            <h4 class="head_ward_h4">{welcomeHeading}</h4>
            <h2 class="head_ward_h2">{secondHeading}</h2>
        </div>
        {children}
        <div className="ward_input_wrap">
         <div class="input_row">
            <div className="input_wrap">
                <label>Ward Username</label>
                <Input
                    type={type}
                    className="form-control"
                    placeholder={holder}
                    data={props}
                    id={id}
                    min={min}
                    name={name}
                    onChange={(e) => onChange(e,data)}
                    disabled={disabled}
                    onKeyPress={onKeyPress}
                />
            </div>
            <div className="input_wrap">
                <label>Password</label>
                <Input
                    type={type}
                    className="form-control"
                    placeholder={holder}
                    data={props}
                    id={id}
                    min={min}
                    name={name}
                    onChange={(e) => onChange(e,data)}
                    disabled={disabled}
                    onKeyPress={onKeyPress}
                />
                <span>Forget Password?</span>
            </div>
            </div>
            
        </div>
        <div className="ward_btn_wrap">
         <button class="mnt_btn sign_btn_wrd" onClick={onClick}>{buttonLabel}</button>
        </div>
        {redirectLink && <div className="ward_bottom">
          <span>Haven't Activated your ward yet ?</span> <a onClick={onClickAnchr}>{redirectLink}</a>
        </div>}
    </div>
</div>
  )
}


export default WardSignInActivation;
