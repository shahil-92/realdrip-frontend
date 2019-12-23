import React from 'react';
import { connect } from 'react-redux';
import HEADER from '../../components/Headers/header'
import DETAILMENU from '../../components/Headers/detailMenu'
import REDCARD from '../../components/Ward/redCard'
import SMALL_CARD from '../../components/Ward/smallCard'
import SPAN_WRAPPER from '../../components/Ward/spanWrapper'
import DashboardOperationWrap from '../../components/Ward/DashboardOperationWrap'
import LEFT_HEADER from '../../components/Headers/leftHeader'
export class WardDashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu:false
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
  handleRedirectClick = () =>{
    this.props.history.push('/operation-detail')
 }

 activeNurseList = (data) => {
  return data && data.map((data)=>{
    return(
      <ul className="list_heading_ul ul_contnt active_dsh_list bottom">    
        <li>
          <div className="user_img_nme_wrap">
            <img class="user_img" src={require('../../assets/Images/user.png')}></img>
            <span>{data.name}</span>
          </div>    
        </li>
        <li>
          <div className="time_in_second bld_txt time_btm">Frank Joseph</div>
        </li>
        <li>
          <div className="time_only time_btm">12:23pm</div>
        </li>
     </ul>
    )
   })
 }

 activeInfusionList = (data) => {
  return data && data.map((data)=>{
    return(
      <ul className="list_heading_ul ul_contnt active_dsh_list" onClick={()=>this.handleRedirectClick()}>    
          <li>
            <div className="bld_prcnt">{data.startVolume}%</div>
            <div className="wrapper_progress_bar"><div className="inner_progress_bar"></div></div>
            <div className="bld_txt">Blood</div>
          </li>
          <li>
            <div className="time_in_second bld_txt">00:13:00</div>
            <div className="time_only">12:23pm</div>
          </li>
          <li>
            <div className="speed_hr"> <span> 28 </span> <img class="speed_up" src={require('../../assets/Images/dummy_logo.jpg')}></img></div>
            <div className="speed_unit bld_txt">ml/hr</div>
          </li>
          <li>
            <div className="infusn_usr_img"><img src={require('../../assets/Images/user.png')}></img></div>
            <div className="infusn_usr_name">Titlayo Olaide</div>
          </li>
          <li>
            <div className="infusn_usr_fname">Frank</div>
            <div className="infusn_disease_name">Malaria</div>
          </li>
      </ul>
    )
   })
 }

  render() {
    console.log('===',this.props)
    const {wardNurse} = this.props.WardNurse
    const {wardInfusion} = this.props.WardInfusion
    return (
        <div className="main_wrapper ">
           <div className="inner_dshbrd_wrap">
            <LEFT_HEADER onClick={this.handleClick}/>
            <div className="right_dashboard">
               <HEADER headerName="ward"/>
              <div class="mid-section-dshbrd">
                {this.state.showMenu && 
                 <DETAILMENU />
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
                        spanText="Devide in use"
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

                      <SPAN_WRAPPER 
                        wrapperClass="device_inuse"
                        spanClassName="tag_name"
                        spanText="B4"
                        childWrapClass="device_idle"
                      >
                        00:12:20
                      </SPAN_WRAPPER>

                      <SPAN_WRAPPER 
                        wrapperClass="device_inuse"
                        spanClassName="tag_name"
                        spanText="B17"
                        childWrapClass="device_idle"
                      >
                        01:40:20
                      </SPAN_WRAPPER>
                      <div className="device_inuse see_all_wrap"><span class="see_all_txt">see all</span></div>
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
