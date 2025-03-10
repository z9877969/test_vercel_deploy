import { useNavigate } from "react-router-dom";
import { BaseModal } from "../BaseModal/BaseModal";
import css from "./LogOutModal.module.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/user/operations";
const LogOutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    await dispatch(logOut);
    navigate("/");
  };
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h3 className={css.header}>Log out</h3>
      <p className={css.logOutText}>Do you really want to leave?</p>
      <div className={css.buttonCont}>
        <button className={css.logOutBut} onClick={handleClick}>
          Log out
        </button>
        <button className={css.closeBut} onClick={onClose}>
          Cancel
        </button>
      </div>
    </BaseModal>
  );
};
export default LogOutModal;
