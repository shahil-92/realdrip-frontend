import React from 'react';
import SPAN_WRAPPER from '../Ward/spanWrapper'

const CARD_COMPONENT = (props) => {
  const {WrapperCLass, spanTextBold, src , spanText, seeAll, onClick} = props
  return (
    <div className={WrapperCLass} onClick={onClick}>
        <SPAN_WRAPPER 
            wrapperClass="device_inuse"
            spanClassName="txt_dashboard"
            spanText={spanTextBold}
            childWrapClass="drip_img_wrap"
            >
            <img class="device_inuse_img" src={src} />
        </SPAN_WRAPPER>
        <SPAN_WRAPPER 
            wrapperClass="device_inuse"
            spanClassName="devide_inuse_txt_mgnt"
            spanText={spanText}
            childWrapClass="see_all_txt_mgmnt"
        >
            {seeAll}
        </SPAN_WRAPPER>
    </div> 
  );
};

export default CARD_COMPONENT;