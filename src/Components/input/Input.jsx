import React, { forwardRef } from "react";
import "./input.css";
function Input(
  {
    type = "text",
    label = "",
    customStyles = {},
    classNames = "",
    isMandatory = false,
    ...props
  },
  ref
) {
  const star = <span style={{ color: "red" }}>*</span>;

  return (
    <div className="input-container">
      <label htmlFor="">
        {label}
        {isMandatory && star}
      </label>
      <input
        type={type}
        ref={ref}
        style={customStyles}
        className={` ${classNames}`}
        {...props}
      />
    </div>
  );
}

export default forwardRef(Input);
