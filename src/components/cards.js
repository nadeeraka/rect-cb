import React, { Component } from "react";
import { Consumer } from "../contax";
class Cards extends Component {
  state = {
    hidden: false
  };
  onHidden = e => {
    e.preventDefault();
    this.setState({ hidden: !this.state.hidden });
  };
  onDelete = (res, dispatch) => {
    dispatch({ type: "DELETE_C", payload: res });
  };
  render() {
    //const { data } = this.props.data;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <>
              <div className="text-center mb-3">
                {" "}
                {this.props.data.name}
                <div className="mr-3">
                  <i
                    onClick={this.onHidden}
                    className="fas fa-arrow-circle-down"
                  />
                  <i
                    onClick={this.onDelete.bind(
                      this,
                      this.props.data.id,
                      dispatch
                    )}
                    className="fas fa-trash-alt"
                  />
                </div>
              </div>

              <div>
                {this.state.hidden ? (
                  <div className="card text-center">
                    <div className="card-header">
                      {this.props.data.username}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{this.props.data.email}</h5>
                      <p className="card-text">{this.props.data.phone}</p>
                    </div>
                    <div className="card-footer text-muted">2 days ago</div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          );
        }}
      </Consumer>
    );
  }
}
export default Cards;
//{` ${data.address.street}  ${data.address.city } ${ data.address.suite } `}
