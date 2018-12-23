import React, { Component } from "react";
import { Consumer } from "../contax";
import uuid from "uuid";
import MyModal from "./modal";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: "",
    on: false
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newObject = {
      id: uuid(),
      name,
      email,
      phone
    };

    if (!(name && email && phone)) {
      const e = "You must have fill all the inputs";
      this.setState({ error: e });
    }
    if (typeof (name !== "string")) {
      const e = "invalid type";
      this.setState({ error: e });
    }
    if (this.state.error) {
      this.setState({ on: true });
    } else {
      dispatch({ type: "ADD_C", payload: newObject });
    }
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value.trim() });
  render() {
    const { name, email, phone } = this.state;
    return (
      <>
        <MyModal error={this.state.error} on={this.state.e} />
        <Consumer>
          {value => {
            const { dispatch } = value;
            return (
              <div className="container-fluid">
                <div className="card mb-3">
                  <div className="card-header">
                    <h3>Add Contact</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={this.onChange}
                          placeholder="Enter Name.."
                          className="form-control form-control-lg"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={this.onChange}
                          placeholder="Enter Email"
                          className="form-control form-control-lg"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Phone">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          value={phone}
                          onChange={this.onChange}
                          placeholder="Enter the number"
                          className="form-control form-control-lg"
                          required
                        />
                      </div>
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="submit"
                      >
                        Add Contact
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            );
          }}
        </Consumer>
      </>
    );
  }
}
export default AddContact;
