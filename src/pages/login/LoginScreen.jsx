import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import types from "../../types/types";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // history.push("/");

    dispatch({ type: types.login, payload: { name: "Camilo" } });
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
