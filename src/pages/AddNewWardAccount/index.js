import React, { useState } from "react";
import { connect } from "react-redux";
import Input from "../../components/inputComponent";
import { Link } from "react-router-dom";
import HEADER from "../../components/Headers/header";
import DETAILMENU from "../../components/Headers/detailMenu";
import LEFT_HEADER from "../../components/Headers/leftHeader";
import * as MetaData from "../../utils/metaData";

function AddNewWardAccount(props) {
  var [showMenu, setToggle] = useState(false);
  return (
    <div className="main_wrapper ">
      <div className="inner_dshbrd_wrap">
        <LEFT_HEADER
          onClick={() => setToggle((showMenu = !showMenu))}
          LEFT_HEADER_DATA={MetaData.MANAGEMENT_LEFT_HEADER_DATA}
          {...props}
        />
        <div className="right_dashboard">
          <HEADER headerName="management" />
          <div class="mid-section-dshbrd">
            {showMenu && (
              <DETAILMENU
                LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA}
                {...props}
              />
            )}
            <div className="nav-tool-tip">{"<"} Dashboard</div>
            <div className="main_wrapper_mgnt_setng">
              <div className="mgmnt_input_wrap_main">
                <div className="mgnt_heading_setting">
                  <h4 class="head_accnt_h3">New ward account</h4>
                </div>
                <div className="input_wrap_accnt_mgnt">
                  <label className="lght_txtmgnt">Ward Name/Number</label>
                  <Input
                    type="text"
                    className="form-control cstm_mgnt_input_clmn"
                    placeholder="Eg. Ward B"
                  />
                </div>

                <div className="input_wrap_accnt_mgnt">
                  <label className="lght_txtmgnt">Ward Username</label>
                  <Input
                    type="text"
                    className="form-control cstm_mgnt_input_clmn"
                  />
                </div>

                <div class="input_row_mgnt">
                  <div className="input_wrap_accnt_row">
                    <label className="lght_txtmgnt">Ward Password</label>
                    <Input
                      type="text"
                      className="form-control cstm_acnt_input"
                      placeholder="Password"
                    />
                  </div>
                  <div className="input_wrap_accnt_row wthout_label">
                    <Input
                      type="text"
                      className="form-control cstm_acnt_input"
                      placeholder="Confirm password"
                    />
                  </div>
                </div>
                <div className="ward-incharge-wrap input_wrap_accnt_mgnt">
                  <h5>Admin in Charge</h5>
                  <div className="incharge-text">
                    The person that will be in charge of this ward dashboard
                  </div>
                </div>
                <div className="input_wrap_accnt_mgnt">
                  <label className="lght_txtmgnt">Admin email</label>
                  <Input
                    type="text"
                    className="form-control cstm_mgnt_input_clmn"
                    placeholder="name"
                  />
                </div>
                <div className="accnt_btn_wrap">
                  <button class="mnt_btn accnt_btn add-wrd-btn">
                    Create new ward account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AddNewWardAccount);
