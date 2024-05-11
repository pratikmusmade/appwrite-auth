import React from "react";
import "./select.css";
function Select(
  {
    options = [],
    label = "",
    customStyles = {},
    isMandatory = false,
    ...props
  },
  ref
) {
  const star = <span style={{ color: "red" }}>*</span>;

  return (
    <>
      <div className="select-container">
        <label htmlFor="">
          {label}
          {isMandatory && star}
        </label>
        <select ref={ref} {...props}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default React.forwardRef(Select);
