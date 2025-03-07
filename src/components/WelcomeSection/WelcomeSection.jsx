import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import s from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <div className={s.welcomeSection}>
      <Logo />
      <p className={s.welcomeText}>Record daily water intake and track</p>
      <h1 className={s.welcomeTitle}>Water consumption tracker</h1>
      <nav className={s.welcomeBtn}>
        <Link to="/tracker" className={s.btnTracker}>
          Try tracker
        </Link>
        <a href="" className={s.btnSignIn}>
          Sign In
        </a>
      </nav>
    </div>
  );
};

export default WelcomeSection;
