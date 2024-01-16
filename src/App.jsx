import React from "react";
import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

/**
 * Renders either the AuthPage or ChatsPage component based on the value of the user state.
 * If the user state is undefined, it renders the AuthPage component and passes a callback function to handle authentication.
 * If the user state is defined, it renders the ChatsPage component and passes the user object as a prop.
 * @returns {JSX.Element} The rendered component (either AuthPage or ChatsPage).
 */
function App() {
  // useState -> [0 user, 1 setUser]
  const [user, setUser] = useState(undefined);
  console.log(user, setUser);
  const handleAuth = (user) => {
    setUser(user);
  };

  return (
    <>{!user ? <AuthPage onAuth={handleAuth} /> : <ChatsPage user={user} />}</>
  );
}

export default App;
