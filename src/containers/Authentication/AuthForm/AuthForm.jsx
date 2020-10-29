import React from "react";
import { Button, Link } from "@material-ui/core";
import Input from "../../../components/UI/Input/Input";
import { inputChangeHandler } from "../../../shared/utility";

import { AuthContext } from "../../../context/authContext";

const signinFormDefault = {
  username: {
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  password: {
    value: "",
    validation: {
      required: true,
      minLength: 8,
      hasAlphaNumber: true,
    },
    valid: false,
    touched: false,
  },

  formValidity: false,
};

const AuthForm = (props) => {
  const isAuthContext = React.useContext(AuthContext);
  const signinHandler = () => {
    isAuthContext.signin();
  };

  const [signinForm, setSigninForm] = React.useState(signinFormDefault);

  const helperText = {
    email: "Enter a Username",
    password:
      "Password must be at least 8 characters and contain a letter and a number ",
  };

  const isValid = (input) =>
    !signinForm[input].valid && signinForm[input].touched;

  const handleSubmit = (event) => {
    event.preventDefault();
    signinHandler();
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Input
        inputType="text"
        label="Username"
        onChange={(e) =>
          inputChangeHandler(e, "username", signinForm, setSigninForm)
        }
        autofocus
        required
        value={signinForm.username.value}
        error={isValid("username")}
        helperText={helperText.username}
      />

      <Input
        inputType="password"
        label="Password"
        onChange={(e) =>
          inputChangeHandler(e, "password", signinForm, setSigninForm)
        }
        required
        error={isValid("password")}
        value={signinForm.password.value}
        helperText={helperText.password}
      />

      <Button
        type="submit"
        fullWidth
        color="primary"
        variant="contained"
        disabled={!signinForm.formValidity}
        className={props.submitStyles}
      >
        Login
      </Button>
      <Link
        component="button"
        color="primary"
        className={props.linkStyles}
        onClick={() => { }}
      > Forgot Password
      </Link>
    </form>
  );
};

export default AuthForm;
