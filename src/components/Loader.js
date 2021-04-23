import React from "react";
import "./style.css";

const Loader = () => {
  return (
    <div>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
