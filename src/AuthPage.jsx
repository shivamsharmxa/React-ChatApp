import PropTypes from "prop-types";
import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value: userName } = e.target[0];
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username: userName, secret: userName, first_name: userName },
        { headers: { "private-key": "c028441a-da58-4732-bd8a-8f2dc7696f19" } }
      )
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
    return res.status(r.status).json(r.data);
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
