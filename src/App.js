import React from "react";
import Palette from "./components/Palette";
import seedColors from './assets/seedColors';
import generatePalette  from "./assets/colorHelpers";

class App extends React.Component {
  render() {
    console.log(generatePalette(seedColors[4]))
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
