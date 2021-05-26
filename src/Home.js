import React from "react";
import Button from "@material-ui/core/Button";
import bg from "../src/assets/img/bg.jpg";
import { Link } from "react-router-dom";
import "../src/assets/css/style.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <img src={bg} className="bg" alt="Welcome Background" />
        <div className="bg-box">
          <h1>Welcome To Our Portal</h1>
          <p>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            evolved over the years.
          </p>
          <Link to="/user-form">
            <Button variant="contained" color="secondary" size="large">
              Create User
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
