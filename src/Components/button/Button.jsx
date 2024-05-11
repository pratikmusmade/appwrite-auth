import React from "react";
import { useNavigate } from "react-router-dom";

function Button(
  { type = "button", customStyles = {}, text = "Button", path = "", onClick },
  ref
) {
  const navigate = useNavigate();
  function onClickHandeler() {
    if (onClick !== undefined) onClick();
    if (path !== "") navigate(path)
  }
  return (
    <button type={type} style={customStyles} onClick={onClickHandeler}>
      {text}
    </button>
  );
}

export default React.forwardRef(Button);
