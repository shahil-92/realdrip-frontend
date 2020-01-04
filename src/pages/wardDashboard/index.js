import React from 'react';
import { connect } from 'react-redux';
import * as MetaData from '../../utils/metaData'
import DashboardOperationWrap from '../../components/Ward/DashboardOperationWrap'
import DETAILMENU from '../../components/Headers/detailMenu'
import HEADER from '../../components/Headers/header'
import LEFT_HEADER from '../../components/Headers/leftHeader'
import REDCARD from '../../components/Ward/redCard'
import SMALL_CARD from '../../components/Ward/smallCard'
import SPAN_WRAPPER from '../../components/Ward/spanWrapper'
export class WardDashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false,
      activeRoute: false
    };
  }
  componentDidMount(){
    this.props.dispatch({ type: 'WARD_NURSE'})
    this.props.dispatch({ type: 'WARD_INFUSION'})
    this.props.dispatch({ type: 'WARD_DEVICE'})
  }

  handleClick = () =>{
    this.setState({showMenu : !this.state.showMenu})
  }
  handleClickSeeall = () => {
    this.props.history.push('/ward-device')
  }

  render() {
    const {wardNurse} = this.props.WardNurse
    const {wardInfusion} = this.props.WardInfusion
    return (
        <div className="main_wrapper ">
           <div className="inner_dshbrd_wrap">
            <LEFT_HEADER onClick={this.handleClick} LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA}  {...this.props}/>
            <div className="right_dashboard">
               <HEADER headerName="ward" {...this.props}/>
              <div class="mid-section-dshbrd">
                {this.state.showMenu && 
                 <DETAILMENU LEFT_HEADER_DATA={MetaData.WARD_LEFT_HEADER_DATA} {...this.props}/>
                }
                <div className="inner_dash">
                  <div className="left-mid-dash">
                    <h2>Dashboard</h2>
                    <h4 class="sumry_head">Summary</h4>
                  <div className="wrap_left_section">
                    <div className="dash_ward_oprtn_wrap">
                      <REDCARD 
                        wrapperClass="urgnt_oprtn_wrap"
                        heading="Urgent"
                        count="1"
                        subHeading="Operation"
                        text="is almost Complete"
                      />
                      <div className="infusn_nrse_wrap">
                        <SMALL_CARD 
                         wrapperClass="infusn_wrap"
                         innerWrapClass="wrpd_icon_num"
                         src={require('../../assets/Images/drip.png')}
                         heading="Active Infusion"
                         count="6"
                         />
                        <SMALL_CARD 
                          wrapperClass="infusn_wrap active_nurse"
                          innerWrapClass="wrpd_icon_num"
                          src={require('../../assets/Images/drip.png')}
                          heading="Active Nurses"
                          count="6"
                         />
                      </div> 
                    </div>     
                    <div className="device_in_use_wrapper">
                      <SPAN_WRAPPER 
                        wrapperClass="device_inuse"
                        spanClassName="urgnt_txt"
                        spanText="02"
                        childWrapClass="drip_img_wrap"
                      >
                        <img class="device_inuse_img" src={require('../../assets/Images/drip.png')} />
                      </SPAN_WRAPPER>
                      <SPAN_WRAPPER 
                        wrapperClass="device_inuse"
                        spanClassName="devide_inuse_txt"
                        spanText="Devices in use"
                        childWrapClass="device_idle"
                      >
                        <span className="idle_number">45</span> <span className="idle_txt">Idle</span>
                      </SPAN_WRAPPER>
                    </div>

                    <div className="device_in_use_wrapper time_left_wrapper">
                      <SPAN_WRAPPER 
                        wrapperClass="device_inuse"
                        spanClassName="tag_name"
                        spanText="Tag Name"
                        childWrapClass="tag_name"
                      >
                        Time left
                      </SPAN_WRAPPER>
                      {/* <br /> */}
                      <SPAN_WRAPPER 
                        wrapperClass="device_inuse"
                        spanClassName="tag_name"
                        spanText="B4"
                        childWrapClass="device_idle"
                      >
                        00:12:20
                      </SPAN_WRAPPER>
                      <hr />

                      <SPAN_WRAPPER 
                        wrapperClass="device_inuse"
                        spanClassName="tag_name"
                        spanText="B17"
                        childWrapClass="device_idle"
                      >
                        01:40:20
                      </SPAN_WRAPPER>
                      <div className="device_inuse see_all_wrap" onClick={this.handleClickSeeall}><span class="see_all_txt">see all</span></div>
                    </div>
                    </div>
                  </div>
                  <div className="right-mid-dash">
                    <DashboardOperationWrap wardInfusion={wardInfusion.data} wardNurse={wardNurse.data} {...this.props}/>
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
  loginResponse: state.WardLogin,
  WardNurse: state.WardNurse,
  WardInfusion: state.WardInfusion,
  WardDevice: state.WardDevice
});

export default connect(mapStateToProps)(WardDashBoard);
