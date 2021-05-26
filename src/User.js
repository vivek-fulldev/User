import React, { Component } from "react";
import RestAPI from "../src/Api";
import Loader from "react-loader-spinner";
export default class User extends Component {
  state = {
    email: "",
    name: "",
    dob: "",
    phone: "",
    isLoding: true,
  };

  handleChange = (e) => {
    let getValue = e.target.value;
    let getName = e.target.name;
    this.setState(() => ({ [getName]: getValue }));
  };

  componentDidMount() {
    this.setState({ isLoding: false });
  }

  _handleSubmit = (e) => {
    this.setState({ isLoding: true });
    e.preventDefault();
    let data = {
      name: this.state.name,
      dob: this.state.dob,
      email: this.state.email,
      phone_no: this.state.phone,
    };
    RestAPI.UserApi(data)
      .then((response) => {
        this.setState({ isLoding: false });
        window.location.href = "/user/list";
      })
      .catch((error) => {
        this.setState({ isLoding: false });
        // Error
        if (error.response) {
          if (error.response.data.email) {
            alert(error.response.data.email);
          }
          if (error.response.data.phone_no) {
            alert(error.response.data.phone_no);
          }
          if (error.response.data.dob) {
            alert(error.response.data.dob);
          }
          if (error.response.data.name) {
            alert(error.response.data.name);
          }
        } else {
          // Something happened in setting up the request that triggered an Error
          alert("Something Went Wrong !");
        }
        console.log("pppppppppp", error.response, error.message);
      });
  };

  render() {
    return (
      <>
        <div className="outer">
          <div className="inner">
            <form onSubmit={this._handleSubmit} method="post">
              {this.state.isLoding ? (
                <div className="text-center">
                  <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    className="load"
                    width={100}
                  />
                </div>
              ) : (
                <>
                  <h3>Create User</h3>
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      name="name"
                      onChange={this.handleChange}
                      required
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Date Of Birth *</label>
                    <input
                      type="date"
                      className="form-control"
                      required
                      name="dob"
                      value={this.state.dob}
                      onChange={this.handleChange}
                      placeholder="Last name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Enter Email"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone No. *</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      placeholder="Enter Phone No."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    Create Now
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </>
    );
  }
}
