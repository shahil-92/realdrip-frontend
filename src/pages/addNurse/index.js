import React from 'react';
import { connect } from 'react-redux';
import * as MetaData from '../../utils/metaData'
import AddEditForm from '../../components/Form/AddEditForm'

export class AddNurse extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
    };
  }

  handleSubmit = () => {
    this.props.history.push('/ward-nurse')
  }

  render() {
    return (
      <AddEditForm
        sectionName = "Nurses"
        TitleName = "Add new nurse"
        Label_first = "Name"
        Label_Second = "Hospital ID no."
        btnText = "Add"
        fileTitle = "Attach profile picture"
        btnClick={this.handleSubmit}
      {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(AddNurse);
