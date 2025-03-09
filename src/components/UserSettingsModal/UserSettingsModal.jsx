import UserSettingsForm from "../UserSettingsForm/UserSettingsForm.jsx";
import s from "./UserSettingsModal.module.css";

const UserSettingsModal = () => {
  return (
    <div>
      <div>
        <svg className={s.modalIconClose} width="24" height="24">
          <use href="../../../public/sprite.svg#icon-close" />
        </svg>
        <h1>Setting</h1>

        <UserSettingsForm />
      </div>
    </div>
  );
};

export default UserSettingsModal;
