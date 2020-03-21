import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <span className="save-btn btn-primary btn" {...props} role="button" tabIndex="0">
      Save Card
    </span>
  );
}

export default SaveBtn;