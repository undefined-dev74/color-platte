import React, { Component } from "react";
import ColorBox from "./ColorBox";
import '../style/Palette.css' 
export default class Palette extends Component {
  
  render() {
    // ? we're mapping over color array than showing it to component
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    
    return (
      <div className="Palette">
        {/* //! Navbar Will Goes Here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* // ? footer */}
      </div>
    );
  }
}
