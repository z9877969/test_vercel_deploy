import React from "react";
import s from "./SignInPage.module.css";
import Logo from "../../components/Logo/Logo.jsx";
import SignInForm from "../../components/SignInForm/SignInForm.jsx";
const SignInPage = () => {
  return (
    <div className={s.box}>
      <Logo />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
