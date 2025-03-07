import { Link } from "react-router-dom";
import s from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={s.logoTitle}>
      AquaTrack
    </Link>
  );
};

export default Logo;
