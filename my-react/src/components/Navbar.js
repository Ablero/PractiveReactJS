import React from 'react';
import backBtnSvg from './backbtn.svg'; // Import the SVG file

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img src={backBtnSvg} alt="Back" className="backButton" /> {/* Icon for back button */}
      </div>
      <div>
        <h6 style={{ fontSize: '24px' }}>Photos</h6>
      </div>
      <div></div> {/* This empty div is for spacing */}
    </div>
  );
}

export default Navbar;
