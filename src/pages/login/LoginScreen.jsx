import React, { useContext, useState } from "react";
import { AuthContext } from "../../auth/AuthContext";
import types from "../../types/types";

const formInitialState = {
  username: "",
  password: "",
};

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const [formValues, setFormValues] = useState(formInitialState);

  const validateInputs = () => {
    if (formValues.username.length <= 2 || formValues.password.length <= 2) {
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      setFormValues(formInitialState);
      window.alert("Username and password area required");
      return;
    }
    const lastPath = localStorage.getItem("lastPath") || "/";
    dispatch({ type: types.login, payload: { name: formValues.username } });
    history.replace(lastPath);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <h2 className="text-center m-4">Heroes App - Login</h2>
      <div className="form-container">
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              className="form-control mb-3 login-input"
              placeholder="Username"
              value={formValues.username}
              onChange={handleInputChange}
            />

            <input
              type="password"
              name="password"
              className="form-control mb-3 login-input"
              placeholder="Password"
              value={formValues.password}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary btn-ingresar">
              Login
            </button>
            <p className="text-center mt-3 alert alert-danger">
              Note: This is a demo Login
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
