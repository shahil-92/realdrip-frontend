import React from 'react';
import { connect } from 'react-redux';
import * as MetaData from '../../utils/metaData'
import Input from '../inputComponent'
import HEADER from '../Headers/header'
import DETAILMENU from '../Headers/detailMenu'
import LEFT_HEADER from '../Headers/leftHeader'

export class AddEditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
    };
  }

  handleClick = () =>{
     this.props.history.push('/ward-activation')
  }
  handleWardSignIn = () =>{
    this.props.history.push('/ward-dashboard')
 }

 handleClickToggle = () =>{
  this.setState({showMenu : !this.state.showMenu})
}

  render() {
      const { sectionName, TitleName, Label_first, Label_Second, onChange,
             firstPlaceholder, secondPlaceholder, filePlaceholder, btnText, fileTitle, btnClick } = this.props
    return (
        <div className="main_wrapper min-vh-height">
        <div className="inner_dshbrd_wrap">
         <LEFT_HEADER onClick={this.handleClickToggle} LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA}  {...this.props}/>
         <div className="right_dashboard">
            <HEADER headerName="management"/>
            <div class="mid-section-dshbrd">
              {this.state.showMenu && 
                 <DETAILMENU />
              }
              <div className="nav-tool-tip">{"<"} {sectionName}</div>
             <div className="main_wrapper_mgnt_setng margin80">
                  <div className="mgmnt_input_wrap_main">
                    <div className="mgnt_heading_setting">
                        <h4 class="head_accnt_h3">{TitleName}</h4>
                    </div>
                    <div className="input_wrap_accnt wthout_label">
                    <label className='lght_txtmgnt'>{Label_first}</label>
                        <Input
                            type="text"
                            className="form-control cstm_mgnt_input_clmn"
                            placeholder={firstPlaceholder}
                            onChange={onChange}
                        />
                    </div>
                    <div className="input_wrap_accnt wthout_label">
                    <label className='lght_txtmgnt'>{Label_Second}</label>
                        <Input
                            type="text"
                            className="form-control cstm_mgnt_input_clmn"
                            placeholder={secondPlaceholder}
                            onChange={onChange}
                        />
                    </div>
                   {fileTitle && <div className="input_wrap_accnt wthout_label">
                    <label className='lght_txtmgnt'>{fileTitle}</label>
                        <Input
                            type="file"
                            className="form-control cstm_add_file custom-file-input"
                            placeholder={filePlaceholder}
                            onChange={onChange}
                        />
                        <span className="user_input_icon"><i class="fa fa-user-plus cstm_user_icon"></i></span>
                    </div>}
                     <div className="accnt_btn_wrap">
                        <button class="btn-add-nurse" onClick={btnClick}>{btnText}</button>
                    </div>
                </div>
              </div>
            </div>
         </div>
         </div>
         </div>
    );
  }
}

const mapStateToProps = (state) => ({
   // addingUserStarted: state.user.createAdmin.addingUserStarted,
  // addingUserResolved: state.user.createAdmin.addingUserResolved,
  // addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(AddEditForm);
