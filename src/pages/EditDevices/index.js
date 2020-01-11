import React from "react";
import { connect } from "react-redux";
import * as MetaData from "../../utils/metaData";
import AddEditForm from "../../components/Form/AddEditForm";

export class EditDevices extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null
    };
  }

  render() {
    return (
      <AddEditForm
        sectionName="Devices"
        TitleName="Edit Device"
        Label_first="Input Device ID"
        Label_Second="Label to put on device"
        btnText="Update"
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(EditDevices);
