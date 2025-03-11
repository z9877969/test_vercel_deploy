import React from "react";
import Logo from "../../components/Logo/Logo.jsx";
import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import s from "./SignUpPage.module.css";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection.jsx";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/user/selectors.js";
import Loader from "../../components/Loader/Loader.jsx";

const SignUpPage = () => {
  const isLoading = useSelector(selectLoading);
  return isLoading ? (
    <Loader />
  ) : (
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
