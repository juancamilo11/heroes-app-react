import React from "react";

const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    // history.push("/");
    history.replace("/");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
