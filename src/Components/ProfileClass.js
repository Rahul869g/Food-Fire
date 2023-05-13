import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        Name: "Dummy Name",
        Location: "Dummy Location"
      }
    };
    console.log("Child Constructor" + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Rahul869g");
    const json = await data.json();
    this.setState({
      userInfo: json
    });
    console.log("Child Component Did Mount" + this.props.name);
  }

  render() {
    console.log("Child Render" + this.props.name);

    return (
      <div>
        <img src={this.state.userInfo.avatar_url}></img>
        <h3>Name: {this.state.userInfo.name}</h3>
        <h3>Location : {this.state.userInfo.location}</h3>
        <h4>
          <span>{this.state.userInfo.followers} followers </span>
          <span>{this.state.userInfo.following} following</span>
        </h4>
      </div>
    );
  }
}

export default ProfileClass;
