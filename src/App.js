import React, { Component } from "react";

import Nav from "./components/header";
import { Provider } from "./contax";
import Content from "./components/content";
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Nav />
          <Content />
        </div>
      </Provider>
    );
  }
}

export default App;
