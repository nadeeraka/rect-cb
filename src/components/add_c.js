import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-header">
            <h3>Add Contact</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name.."
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter the number"
                  className="form-control form-control-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddContact;
