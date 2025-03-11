import css from "./AddWaterBtn.module.css";

const AddWaterBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.btn}>
      <div className={css.wrapper}>
        {/* зі спрайту вставити плюсік сюди */}
        <p> Додати воду</p>
      </div>
    </button>
  );
};

export default AddWaterBtn;
