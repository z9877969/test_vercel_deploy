import css from "./UserBarPopover.module.css";

const UserBarPopover = () => {
  const handleClick = () => {};
  return (
    <div className={css.userBarPopover}>
      <button className={css.setBut}>
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
    </div>
  );
};
export default UserBarPopover;
