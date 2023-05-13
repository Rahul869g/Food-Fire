import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com"
  }
});

// React dev tools doesn't tract Context name , so we do
// this is usually helpful for debugging
UserContext.displayName = "UserContext";

export default UserContext;
