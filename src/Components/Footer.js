// Footer component for footer section

import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/rahull-gupta/"
        target="_blank"
        title="Rahul Gupta's Linkedin Profile"
      >
        {user.name}
      </a>
      <i className="fa-solid fa-copyright"></i>2023
      <strong>
        Food<span>Villa</span>
      </strong>
    </div>
  );
};

export default Footer;
