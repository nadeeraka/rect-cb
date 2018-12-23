import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  onSubmit = e => {
    e.preventDefault();
    console.dir(this.state);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-header">
            <h3>Add Contact</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                  placeholder="Enter Name.."
                  className="form-control form-control-lg"
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
                />
              </div>
              <button className="btn btn-dark btn-lg btn-block" type="submit">
                Add Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddContact;
