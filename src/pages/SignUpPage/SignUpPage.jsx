import React from "react";
import Logo from "../../components/Logo/Logo.jsx";
import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import s from "./SignUpPage.module.css";

const SignUpPage = () => {
  return (
    <div className={s.box}>
      <Logo />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
