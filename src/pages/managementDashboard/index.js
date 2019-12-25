import React from 'react';
import { connect } from 'react-redux';
import HEADER from '../../components/Headers/header'
import DETAILMENU from '../../components/Headers/detailMenu'
import LEFT_HEADER from '../../components/Headers/leftHeader'
import CARD_COMPONENT from '../../components/management/managementCard'
import * as MetaData from '../../utils/metaData'
export class ManagementDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false
    };
  }

  handleClick = () =>{
    this.setState({showMenu : !this.state.showMenu})
  }
  handleRedirectClick = () =>{
    this.props.history.push('/operation-detail')
  }
  handleCardComponent = () => {
    return MetaData.ManagementDashboardData.map((data,key)=>(
        <CARD_COMPONENT
          WrapperCLass = "device_in_use_wrapper mngnt_inner_wrap"
          spanTextBold = {data.count}
          src = {data.image}
          spanText = {data.text}
          seeAll = "see all"
          onClick={this.handleRedirectClick}
        />
      ))
  }
 
  render() {
    return (
        <div className="main_wrapper ">
           <div className="inner_dshbrd_wrap">
            <LEFT_HEADER onClick={this.handleClick} LEFT_HEADER_DATA={MetaData.MANAGEMENT_LEFT_HEADER_DATA} {...this.props}/>
            <div className="right_dashboard">
              <HEADER headerName="management"/>    
              <div className="mid-section-dshbrd">
                {this.state.showMenu && <DETAILMENU />}
                <div className="inner_dash">
                  <div className="wrap_dash_new_wrad">
                    <div className="mngmnt_top_heading">
                        <h2>Dashboard</h2>
                        <h4 class="sumry_head">Summary</h4>
                    </div>
                    <div className="add_new_device_wrap_mgmnt">
                        <div className="add_device_btn">Add new ward </div>
                    </div>
                  </div>
                  <div className="wrap_mngmnt_sectn">
                    {this.handleCardComponent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ManagementDashboard);
