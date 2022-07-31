import React from "react";
export default function Header() {
  return (
    <div className="headerIndex">
      <div className="left">
        <h4>Left</h4>
      </div>
      <div className="titleIndex">
        <h4>ENCICLOPEDIA MICROSOFT ENCARTA 98</h4>
      </div>
      <div className="right">
        <div className="min">
        <img src="https://img.icons8.com/fluency-systems-filled/48/000000/minimize-window.png"/>
        </div>
        <div className="max">
          <img src="https://img.icons8.com/sf-ultralight-filled/25/000000/maximize-window.png" />
        </div>
        <div className="close">
          <img src="https://img.icons8.com/material-rounded/25/000000/close-window.png" />
        </div>
      </div>
    </div>
  );
}
