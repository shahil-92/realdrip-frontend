import React from 'react';
import POPUP from '../../components/popUp/popUp'

export const DeleteOperationPopUp = (props)=> {
    return (
        <POPUP 
          src={require('../../assets/Images/rubbish-bin-delete-button.svg')} 
          title="Delete Operation"
          subHeading="Are you sure you want to delete this opertaion ?, all stored information about this operation will ne erased." 
          subHeadingClass="delete-oprtn-email-sent-wrap"
          titleClass="mail-sent-wrap" 
        >
          <div className="password-recovry-wrap optn-btn-wrap">
              <button class="password-recovry-btn">Yes delete</button>
              <button class="password-recovry-btn">No</button>
          </div>
        </ POPUP>
    );
  }

export default DeleteOperationPopUp;
