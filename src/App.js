import React from "react";
import Palette from "./components/Palette";
import seedColors from './assets/seedColors';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
