import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profile Functional Component </h1>
      <h3>name : {props.name}</h3>
      <h4>count {count}</h4>
      <button
        onClick={() => {
          setCount(5);
        }}
      >
        count
      </button>
    </div>
  );
};

export default Profile;
