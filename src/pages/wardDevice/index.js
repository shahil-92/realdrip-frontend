import React from 'react';
import { connect } from 'react-redux'
import * as MetaData from '../../utils/metaData'
import Table from 'react-bootstrap/Table'
import ButtonWrapper from '../../components/Button/ButtonWrapper'
import DETAILMENU from '../../components/Headers/detailMenu'
import HEADER from '../../components/Headers/header'
import LEFT_HEADER from '../../components/Headers/leftHeader'
import SearchBar from '../../components/SearchBar/SearchBar'
import SMALL_CARD from '../../components/Ward/smallCard'

export class WardDevice extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false,
      activeTab:'active'
    };
  }

  handleClick = () =>{
    this.setState({showMenu : !this.state.showMenu})
  }

  handleRedirectClick = () =>{
    this.props.history.push('/connected-inuse')
  }
  handleAddNewDevice = () =>{
    this.props.history.push('/add-device')
  }
  handleActiveTab = (tab) => {
    this.setState({activeTab : tab})
  }

  handleDeviceActiveList = (data) => ( 
    <Table className="table-container" responsive>
      <thead className="wrapper_thead">
        <tr className="list_heading_ul fontWeight500">
          <td className="devic_txt">To be free</td>
          <td className="devic_txt">Label</td>
          <td className="devic_txt">Nurse</td>
        </tr>
      </thead>
      <tbody className="wrapper_tbody white-background">
     {['1','2','3'].map((data)=>{
        return(
        <tr className="list_heading_ul device_ul" onClick={()=>this.handleRedirectClick()}>    
            <td>
              <div className="bld_txt devic_txt">02:00pm</div>
            </td>
            <td>
              <div className="time_only">B14</div>
            </td>
            <td>
              <div className="speed_unit bld_txt devic_txt">Abimbola</div>
            </td>
        </tr>
        )
      })}
    </tbody>
    </Table> 
   )

   handleDeviceAllList = (data) => ( 
    <Table className="table-container" responsive>
      <thead className="wrapper_thead">
        <tr className="list_heading_ul fontWeight500">
          <td className="devic_txt">Label</td>
          <td className="devic_txt">Device ID</td>
          <td className="devic_txt">Status</td>
        </tr>
      </thead>
      <tbody className="wrapper_tbody white-background">
     {['1','2','3'].map((data)=>{
        return(
        <tr className="list_heading_ul device_ul" onClick={()=>this.handleRedirectClick()}>    
            <td>
              <div className="bld_txt devic_txt">B1</div>
            </td>
            <td>
              <div className="time_only">0221333</div>
            </td>
            <td>
              <div className="speed_unit bld_txt devic_txt">Idle</div>
            </td>
        </tr>
        )
      })}
    </tbody>
    </Table> 
   )

  render() {
    const { activeTab } = this.state
    return (
        <div className="main_wrapper ">
           <div className="inner_dshbrd_wrap">
           <LEFT_HEADER onClick={this.handleClick} LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA} {...this.props}/>
            <div className="right_dashboard">
               <HEADER headerName="Ward"/>     
               <div class="mid-section-dshbrd">
                {this.state.showMenu && <DETAILMENU LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA} {...this.props}/>}
                <div className="inner_dash">
                  <div className="left-mid-dash">
                    <h2>Devices</h2>
                    <div className="oprtn_tabs_main_wrapper margnTop">
                        <div className={activeTab==="active" ? "oprtn_history_tab activeTab" : 'oprtn_history_tab'}  onClick={() => this.handleActiveTab('active')}>Active</div>
                        <div className={activeTab==="all" ? "oprtn_history_tab activeTab" : 'oprtn_history_tab'} onClick={() => this.handleActiveTab('all')}>All</div>
                    </div>
                    <h4 class="sumry_head">Summary</h4>
                    <div className="wrap_left_section">
                      <div className="dash_ward_device_wrap">
                        <div className="infusn_device_wrap">
                          <SMALL_CARD 
                            wrapperClass="infusn_wrap green_device cstm_device_ward"
                            innerWrapClass="wrpd_icon_num"
                            src={require('../../assets/Images/drip.png')}
                            heading="Actively Inuse"
                            count="6"
                          />
                          <SMALL_CARD 
                            wrapperClass="infusn_wrap cstm_device_ward"
                            innerWrapClass="wrpd_icon_num"
                            heading="Idle"
                            count="41"
                          />
                        </div>
                        <SMALL_CARD 
                          wrapperClass="infusn_wrap device_infusn"
                          innerWrapClass="wrpd_icon_num"
                          src={require('../../assets/Images/drip.png')}
                          heading="All registered"
                          count="43"
                          />
                      </div>
                    </div>
                  </div>
                  <div className="right-mid-dash">
                    <div className="right-wrap-heading devics_lst_clmn">
                        <ButtonWrapper 
                          btnWrapperClass="add_new_device_wrap"
                          btnClass="add_device_btn"
                          btnText="Add new device"
                          onclick={()=>this.handleAddNewDevice()}
                        />
                        <SearchBar
                          SearchdropDownWrapClass ="operation_search_tab_bar"
                          searchInputWrapClass = "oprtn_search_wrap operation_pdng"
                          dropDownWrapClass = "oprtn_urgncy_wrap operation_pdng"
                          DropdownName = "Name" 
                        />
                        {(activeTab === 'active') && this.handleDeviceActiveList()}
                        {(activeTab === 'all') && this.handleDeviceAllList()}
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

export default connect(mapStateToProps)(WardDevice);
