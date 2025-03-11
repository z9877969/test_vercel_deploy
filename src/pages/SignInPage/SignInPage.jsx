import React from "react";
import s from "./SignInPage.module.css";
import Logo from "../../components/Logo/Logo.jsx";
import SignInForm from "../../components/SignInForm/SignInForm.jsx";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection.jsx";
const SignInPage = () => {
  return (
    <div className={s.container}>
      <div className={s.box}>
        <Logo />
        <SignInForm />
      </div>
      <div className={s.advantagesSection}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default SignInPage;
