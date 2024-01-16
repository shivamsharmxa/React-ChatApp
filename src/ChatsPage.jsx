
import PropTypes from 'prop-types';
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='90261dbc-1992-4cb4-9e67-03ceb5da18c0'
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};


ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }),
};

export default ChatsPage;
