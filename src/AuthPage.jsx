import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

/**
 * Renders a form for users to set a username. When the form is submitted,
 * it sends a PUT request to an API endpoint to create a new user with the entered username.
 * If the request is successful, it calls a callback function `onAuth` with the response data.
 * If there is an error, it logs the error to the console.
 *
 * @param {Object} props - The properties passed to the AuthPage component.
 * @param {Function} props.onAuth - The callback function to handle authentication.
 * @returns {JSX.Element} - The rendered AuthPage component.
 */
const AuthPage = (props) => {
  /**
   * Handles the form submission event.
   *
   * @param {Event} e - The form submission event.
   */
  const onSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target.username.value;

    try {
      const response = await axios.put(
        "https://api.chatengine.io/users/",
        {
          username: userName,
          secret: userName,
          first_name: userName,
        },
        {
          headers: {
            "private-key": "c028441a-da58-4732-bd8a-8f2dc7696f19",
          },
        }
      );

      const responseData = { ...response.data, secret: userName };
      props.onAuth(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Hello Buddy 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default AuthPage;
