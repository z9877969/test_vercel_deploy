import s from "./UserSettingsForm.module.css";

const UserSettingsForm = () => {
  return (
    <div>
      <div>
        <img
          srcset="../../../public/img/auth.png 2x, ../../../public/img/auth.png 1x"
          src="../../../public/img/auth.png"
          alt="User's foto"
          width="75"
          height="75"
        />
        <button>
          <svg className={s.uploadIcon} width="18" height="18">
            <use href="../../../public/sprite.svg#icon-upload" />
          </svg>
          <p>Upload a photo</p>
        </button>
      </div>
    </div>
  );
};

export default UserSettingsForm;
