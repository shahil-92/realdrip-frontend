import React from 'react';
import PropTypes from 'prop-types';
// import { Dropdown } from 'react-bootstrap';

const WardDeviceNurse = (props) => {
  const { btnWrapperClass, btnText, dropDownInputWrapClass, DropdownName } = props
  return (
    <div>
        <div className={btnWrapperClass}>
        <div className="add_device_btn">{btnText}</div>
        </div>
        <div className={dropDownInputWrapClass}>
            <div className="oprtn_search_wrap operation_pdng">
                <input type="text" className="form-control cstm_search"/>
                <span className="search_icon"><i class="fa fa-search" aria-hidden="true"></i></span>
            </div>
            <div className="oprtn_hmbrgr_image operation_pdng">
                <i class="fa fa-bars"></i>
            </div>
            <div className="oprtn_urgncy_wrap operation_pdng">
                <span className="txt_urgncy">{DropdownName}</span>
                <span className="oprtn_down_arrow"><i class="fa fa-chevron-down cstm_dwn_arrow"></i></span>
            </div>
        </div>
    </div>
  );
};

WardDeviceNurse.propTypes = {
    btnWrapperClass: PropTypes.string,
    btnText: PropTypes.string,
    dropDownInputWrapClass: PropTypes.string,
    DropdownName: PropTypes.string,
};

export default WardDeviceNurse;