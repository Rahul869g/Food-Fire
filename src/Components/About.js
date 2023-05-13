import food from "../assets/Images/burger-image.png";
import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";

import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about-container">
        {/* <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>Fire</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" />
        </div> */}

        {/* ---------------------------------------------------------------- */}
        {/* To use useContext in class components, we do  */}
        {/* <UserContext.Consumer>
          {(value) => {
            console.log(value);
          }}
        </UserContext.Consumer> */}
        {/* ---------------------------------------------------------------- */}
        <ProfileClass name={"Rahul Class 1"} />
      </div>
    );
  }
}

export default About;
