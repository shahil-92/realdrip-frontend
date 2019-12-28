import React from 'react';
import SPAN_WRAPPER from '../Ward/spanWrapper'

const ManagementWardList = (props) => {
  const {WrapperCLass, spanTextBold, src , spanText, seeAll, onClick} = props
  return (
    <div class="dash_active_wrap oprtn_scroll_list">
        <Table responsive>
            <thead>
            <tr>
                <th className="lght_txtmgnt">Label</th>
                <th className="lght_txtmgnt">Ward name</th>
                <th className="lght_txtmgnt">Devices deployed</th>
                <th className="lght_txtmgnt">Registered Nurses</th>  
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="lght_txtmgnt">Ward A</td>
                <td className="lght_txtmgnt">Heart center</td>
                <td className="lght_txtmgnt">20</td>
                <td className="bld_txt_mgnt">43</td>
            </tr>
            </tbody>
        </Table>
  </div>  
  );
};

export default ManagementWardList;