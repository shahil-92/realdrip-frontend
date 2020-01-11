import React from "react";
import { connect } from "react-redux";
import * as MetaData from "../../utils/metaData";
import AddEditForm from "../../components/Form/AddEditForm";

export class AddNewDevice extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null
    };
  }

  handleSubmit = () => {
    this.props.history.push("/ward-device");
  };

  render() {
    return (
      <AddEditForm
        sectionName="Devices"
        TitleName="Add new Device"
        Label_first="Input Device ID"
        Label_Second="Label to put on device"
        btnText="Add"
        btnClick={this.handleSubmit}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AddNewDevice);
