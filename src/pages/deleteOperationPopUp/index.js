import React from "react";
import POPUP from "../../components/popUp/popUp";

export const DeleteOperationPopUp = props => {
  const handleDelete = data => {
    props.handleDeleteConfirm(data);
    return;
  };
  return (
    <POPUP
      src={require("../../assets/Images/circle-with-check-symbol.svg")}
      title="Delete Operation"
      subHeading="Are you sure you want to delete this opertaion ?, all stored information about this operation will ne erased."
      subHeadingClass="delete-oprtn-email-sent-wrap"
      titleClass="mail-sent-wrap"
    >
      <div className="password-recovry-wrap optn-btn-wrap">
        <button
          class="password-recovry-btn"
          onClick={() => handleDelete("yes")}
        >
          Yes delete
        </button>
        <button
          class="password-recovry-btn green-btn"
          onClick={() => handleDelete("no")}
        >
          No
        </button>
      </div>
    </POPUP>
  );
};

export default DeleteOperationPopUp;
