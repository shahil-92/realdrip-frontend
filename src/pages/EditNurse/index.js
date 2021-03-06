import React from 'react';
import { connect } from 'react-redux';
import * as MetaData from '../../utils/metaData'
import AddEditForm from '../../components/Form/AddEditForm'

export class EditNurse extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
    };
  }

//   handleClick = () =>{
//      this.props.history.push('/ward-activation')
//   }
//   handleWardSignIn = () =>{
//     this.props.history.push('/ward-dashboard')
//  }

//  handleClickToggle = () =>{
//   this.setState({showMenu : !this.state.showMenu})
// }

  render() {
    return (
      <AddEditForm
        sectionName = "Nurses"
        TitleName = "Edit nurse"
        Label_first = "Name"
        Label_Second = "Hospital ID no."
        btnText = "Update"
        fileTitle = "Attach profile picture"
      {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(EditNurse);
