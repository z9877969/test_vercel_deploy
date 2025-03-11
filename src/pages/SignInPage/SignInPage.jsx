import React from "react";
import s from "./SignInPage.module.css";
import Logo from "../../components/Logo/Logo.jsx";
import SignInForm from "../../components/SignInForm/SignInForm.jsx";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection.jsx";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/user/selectors.js";
const SignInPage = () => {
  const isLoading = useSelector(selectLoading);
  return isLoading ? (
    <Loader />
  ) : (
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
