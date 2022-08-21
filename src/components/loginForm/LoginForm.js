import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import "./loginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();

  const LoginFormSchema = Yup.object().shape({
    username: Yup.string()
      //   .min(4, "Username must be at least 4 characters")
      //   .max(20, "Username max length is 20 characters")
      .required("Username is required"),
    password: Yup.string()
      //   .min(6, "Password must be at least 6 characters")
      //   .max(20, "Password max length is 20 characters")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginFormSchema,
    onSubmit: (values) => {
      localStorage.setItem(
        "PasswordLogin",
        JSON.stringify({
          username: values.username,
          password: values.password,
        })
      );
      navigate("/chat");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="login_page-form">
      <input
        name="username"
        className="login_page-input"
        type="text"
        placeholder={
          formik.errors.username ? formik.errors.username : "Username"
        }
        error={formik.errors.username}
        onChange={formik.handleChange}
        value={formik.values.username}
        autoComplete="on"
      />
      <input
        name="password"
        className="login_page-input"
        type="password"
        placeholder={
          formik.errors.password ? formik.errors.password : "Password"
        }
        error={formik.errors.password}
        onChange={formik.handleChange}
        value={formik.values.password}
        autoComplete="on"
      />
      <input className="login_page-btn" type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
