import PropTypes from "prop-types";
import React from "react";

const CustomSwitch = props => {
  const {
    wrapperClass,
    inputId,
    onChange,
    tempId,
    className,
    SwitchToggle
  } = props;
  return (
    <div class={wrapperClass}>
      <input
        type="checkbox"
        id={inputId}
        checked={SwitchToggle}
        onChange={
          onChange
            ? event => onChange(event)
            : () => console.log("input changed")
        }
        className={className}
      />
      <label for={tempId} />
    </div>
  );
};

CustomSwitch.propTypes = {
  wrapperClass: PropTypes.string,
  inputId: PropTypes.string,
  tempId: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default CustomSwitch;
