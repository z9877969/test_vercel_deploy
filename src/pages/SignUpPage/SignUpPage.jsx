import React from "react";
import Logo from "../../components/Logo/Logo.jsx";
import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import s from "./SignUpPage.module.css";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection.jsx";

const SignUpPage = () => {
  return (
    <div className={s.container}>
      <div className={s.box}>
        <Logo />
        <SignUpForm />
      </div>
      <div className={s.advantagesSection}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default SignUpPage;
