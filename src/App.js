import React from "react";
import "./App.css";

import List from "./listofanimals";

class App extends React.Component {
  state = {
    showapp: false,
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to zoo application::</h2>
          <button
            className="button"
            onClick={() => {
              this.setState({ showapp: !this.state.showapp });
            }}
          >
            click to {this.state.showapp ? "close" : "open"}
          </button>
        </div>
        {this.state.showapp ? <List /> : null}
      </div>
    );
  }
}

export default App;
