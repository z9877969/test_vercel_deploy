import css from "./AddWaterBtn.module.css";
import sprite from "../../../public/sprite.svg";

const AddWaterBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.btn}>
      <div className={css.wrapper}>
        <svg width="30" height="30" className={css.icon}>
          <use href={`${sprite}#icon-plus-bl`} />
        </svg>
        <p> Add water</p>
      </div>
    </button>
  );
};

export default AddWaterBtn;
