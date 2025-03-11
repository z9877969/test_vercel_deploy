import { useState } from "react";
import LogOutModal from "../LogOutModal/LogOutModal";
import css from "./UserBarPopover.module.css";
import UserSettingsModal from "../UserSettingsModal/UserSettingsModal.jsx";

const UserBarPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(true);
  };
  return (
    <div className={css.userBarPopover}>
      <button className={css.setBut} onClick={() => setIsSettingsOpen(true)}>
        <svg className={css.svg}>
          <use href="/sprite.svg#icon-settings" className={css.svgUseSet}></use>
        </svg>
        Setting
      </button>
      <button className={css.logBut} onClick={handleClick}>
        <svg className={css.svg}>
          <use href="/sprite.svg#icon-log-out" className={css.svgUseLog}></use>
        </svg>
        Log out
      </button>
      <LogOutModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <UserSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => {
          setIsSettingsOpen(false);
        }}
      />
    </div>
  );
};
export default UserBarPopover;
