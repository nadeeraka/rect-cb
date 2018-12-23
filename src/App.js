import React, { Component } from "react";

import Nav from "./components/layouts/header";
import { Provider } from "./contax";
import Content from "./components/content";
import AddContact from "./components/add_c";
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Nav />
          <AddContact />
          <Content />
        </div>
      </Provider>
    );
  }
}

export default App;
