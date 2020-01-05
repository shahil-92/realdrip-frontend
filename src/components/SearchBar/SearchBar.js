import React from 'react';
import PropTypes from 'prop-types';
// import { Dropdown } from 'react-bootstrap';

const SearchBar = (props) => {
  const { SearchdropDownWrapClass, searchInputWrapClass, dropDownWrapClass, DropdownName } = props
  return (
    <div className={SearchdropDownWrapClass}>
        <div className={searchInputWrapClass}>
            <input type="text" className="form-control cstm_search"/>
            <span className="search_icon"><i class="fa fa-search" aria-hidden="true"></i></span>
        </div>
        <div className="oprtn_hmbrgr_image operation_pdng">
            <i class="fa fa-bars"></i>
        </div>
        <div className={dropDownWrapClass}>
            <span className="txt_urgncy">{DropdownName}</span>
            <span className="oprtn_down_arrow"><i class="fa fa-chevron-down cstm_dwn_arrow"></i></span>
        </div>
    </div>
  );
};

SearchBar.propTypes = {
    SearchdropDownWrapClass: PropTypes.string,
    searchInputWrapClass: PropTypes.string,
    dropDownWrapClass: PropTypes.string,
    DropdownName: PropTypes.string,
};

export default SearchBar;