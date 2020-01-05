import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table'
import * as MetaData from '../../utils/metaData'
import ButtonWrapper from '../../components/Button/ButtonWrapper'
import DETAILMENU from '../../components/Headers/detailMenu'
import HEADER from '../../components/Headers/header'
import LEFT_HEADER from '../../components/Headers/leftHeader'
import SMALL_CARD from '../../components/Ward/smallCard'
import SearchBar from '../../components/SearchBar/SearchBar'

export class WardNurse extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false,
      activeTab:'all'
    };
  }

  handleClick = () =>{
    this.setState({showMenu : !this.state.showMenu})
  }

  handleRedirectClick = () =>{
    this.props.history.push('/nurse-detail')
  }

  handleActiveTab = (tab) => {
    this.setState({activeTab : tab})
  }

  handleAddNurse = () => {
    this.props.history.push('/add-nurse')
  }

  handleNurseActiveList = (data) => ( 
    <Table responsive>
      <thead>
        <tr className="list_heading_ul fontWeight500">
          <td className="fst_nurs_li">Nurse</td>
          <td className="">Hospital ID no.</td>
          <td className="">Assigned patient</td>
          <td className="">time to be free</td>
        </tr>
      </thead>
      <tbody>
     {['1','2','3'].map((data)=>{
        return(
          <tr className="list_heading_ul device_ul" onClick={()=>this.handleRedirectClick()}>    
            <td>
              <div className="bld_txt">
                <img class="user_img" src={require('../../assets/Images/user.png')}></img>
                <span>Frank Joseph</span>
              </div>    
            </td>    
            <td>
              <div className="bld_txt">IJK/B2/0119</div>
            </td>
            <td>
              <div className="time_only">Frank Joseph</div>
            </td>
            <td>
              <div className="speed_unit bld_txt">02:00pm</div>
            </td>
        </tr>
        )
      })}
    </tbody>
    </Table> 
   )

   handleNurseAllList = (data) => ( 
    <Table responsive>
    <thead>
      <tr className="list_heading_ul fontWeight500">
        <td className="fst_nurs_li">Nurse</td>
        <td className="">Hospital ID no.</td>
        <td className="">Status</td>
        <td className="">All Operations</td>
      </tr>
    </thead>
    <tbody>
   {['1','2','3'].map((data)=>{
        return(
          <tr className="list_heading_ul device_ul" onClick={()=>this.handleRedirectClick()}>    
            <td>
              <div className="bld_txt">
                <img class="user_img" src={require('../../assets/Images/user.png')}></img>
                <span>Frank Joseph</span>
              </div>    
            </td>    
            <td>
              <div className="bld_txt">02:00pm</div>
            </td>
            <td>
              <div className="time_only">B14</div>
            </td>
            <td>
              <div className="speed_unit bld_txt">Abimbola</div>
            </td>
        </tr>
        )
      })}
    </tbody>
    </Table>
   )
  
  render() {
    const {activeTab} = this.state
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
                    <h2>Nurses</h2>
                    <div className="oprtn_tabs_main_wrapper margnTop">
                        <div className={activeTab ==="active" ? "oprtn_history_tab activeTab" : 'oprtn_history_tab'}  onClick={() => this.handleActiveTab('active')}>Active</div>
                        <div className={activeTab ==="all" ? "oprtn_history_tab activeTab" : 'oprtn_history_tab'} onClick={() => this.handleActiveTab('all')}>All</div>
                    </div>
                    <h4 class="sumry_head">Summary</h4>
                  <div className="wrap_left_section">
                    <div className="dash_ward_device_wrap">
                      <SMALL_CARD 
                        wrapperClass="infusn_wrap device_infusn green_device nurse_active_wrd"
                        innerWrapClass="wrpd_icon_num"
                        src={require('../../assets/Images/drip.png')}
                        heading="Active Nurse"
                        count="2"
                      />
                      <div className="infusn_device_wrap">
                         <SMALL_CARD 
                            wrapperClass="infusn_wrap cstm_device_ward"
                            innerWrapClass="wrpd_icon_num"
                            heading="All registered"
                            count="43"
                          />
                         <SMALL_CARD 
                            wrapperClass="infusn_wrap cstm_device_ward"
                            innerWrapClass="wrpd_icon_num"
                            heading="Unassigned"
                            count="41"
                          />
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="right-mid-dash">
                    <div className="right-wrap-heading devics_lst_clmn">
                        <ButtonWrapper 
                          btnWrapperClass="add_new_device_wrap"
                          btnClass="add_device_btn"
                          btnText="Add new Nurse"
                          onclick={this.handleAddNurse}
                        />
                        <SearchBar
                          SearchdropDownWrapClass ="operation_search_tab_bar"
                          searchInputWrapClass = "oprtn_search_wrap operation_pdng"
                          dropDownWrapClass = "oprtn_urgncy_wrap operation_pdng"
                          DropdownName = "Name" 
                        />
                        {(activeTab === 'active') && this.handleNurseActiveList()}
                        {(activeTab === 'all') && this.handleNurseAllList()} 
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

export default connect(mapStateToProps)(WardNurse);
