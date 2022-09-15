import React from "react";
import Portfolio from "./Portfolio";

function Sidebar() {
  return (
    <div style={{ width: "25%", padding: "0.5vh 0", boxSizing: "border-box" }}>
      <Portfolio />
    </div>
  );
}

export default Sidebar;
