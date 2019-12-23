import React from 'react';
import { Link } from 'react-router-dom';
import * as ImageContainer from '../../utils/images'
import * as MetaData from '../../utils/metaData'
export class LEFT_HEADER extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         active:''
        };
    }

    handleActiveClick = (data) =>{
        this.setState({active : data.imageName})
        if(this.state.active === data.imageName){
            this.props.history.push(data.url)
        }
    }

  render() {
  console.log('===',this.props)
  const {onClick} = this.props 
  const { active } = this.state
  return (
    <div className="left_dashboard">
        <div className="inner_left_dashboard">
        <div className="logo"> 
            <img className="hamburger_btn" src={ImageContainer.HamburgurIcon} onClick={onClick}/>
        </div>
        <ul className="menu_wrap">
        {MetaData.WARD_LEFT_HEADER_DATA.map((data)=>{
            return(
                <Link onClick={()=>this.handleActiveClick(data)}><li><img src={(active === data.imageName) ? require(`../../assets/Images/${data.imageName}_active.png`) : require(`../../assets/Images/${data.imageName}.png`) } /> </li></Link>
            )
        })}
        </ul>
        </div>
    </div>
  );
 }
}

export default LEFT_HEADER;
