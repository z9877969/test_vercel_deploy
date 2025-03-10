import UserBar from "../UserBar/UserBar.jsx";
import css from "./UserPanel.module.css";
const UserPanel = () => {
  return (
    <div className={css.userPanelCont}>
      <h2 className={css.helloUser}>
        Hello
        <span className={css.helloUserSpan}>
          , {false ? "user.name" : "User"}!
        </span>
      </h2>
      <UserBar />
    </div>
  );
};
export default UserPanel;
