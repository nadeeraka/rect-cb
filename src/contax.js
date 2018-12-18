import React, { Component } from "react";
import axios from "axios";
const Contax = React.createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_C":
      return {
        ...state,
        data: state.data.filter(res => res.id !== action.payload)
      };

    default:
      break;
  }
};

export class Provider extends Component {
  state = {
    data: [],
    dispatch: action => {
      this.setState(state => Reducer(state, action));
    }
  };
  async componentDidMount() {
    let API = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (API.data) {
      this.setState({ data: API.data });
    }
    console.log(API.data);
  }

  render() {
    return (
      <Contax.Provider value={this.state}>
        {this.props.children}
      </Contax.Provider>
    );
  }
}

export const Consumer = Contax.Consumer;
