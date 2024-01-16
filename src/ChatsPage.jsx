import React from "react";
import PropTypes from "prop-types";
import { PrettyChatWindow } from "react-chat-engine-pretty";

/**
 * Renders a chat window using the PrettyChatWindow component.
 * @param {Object} props - The user's information, including the username and secret.
 * @returns {JSX.Element} - The rendered chat window component.
 */
const ChatsPage = (props) => {
  const { username, secret } = props.user;

  return (
    <div className="background">
      <PrettyChatWindow
        projectId="90261dbc-1992-4cb4-9e67-03ceb5da18c0"
        username={username}
        secret={secret}
      />
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage;
