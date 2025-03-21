import { useState } from "react";
import UserBarPopover from "../UserBarPopover/UserBarPopover";
import css from "./UserBar.module.css";
const UserBar = () => {
  const [isActive, setIsActive] = useState(false);
  const toogle = () => setIsActive((prev) => !prev);
  return (
    <div className={css.userBar}>
      <button className={css.userBarButton} onClick={toogle}>
        <p className={css.userName}>{false ? "user.name" : "User"}</p>
        <div className={css.userImageCont}>
          <img src="null" alt="user-image" className={css.userImage} />
        </div>
        <svg className={isActive ? css.svgActive : css.svg}>
          <use
            href="/sprite.svg#icon-chevron-down"
            className={css.svgUse}
          ></use>
        </svg>
      </button>
      {isActive && <UserBarPopover />}
    </div>
  );
};
export default UserBar;
