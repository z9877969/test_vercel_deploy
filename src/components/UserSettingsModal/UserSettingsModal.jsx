import { BaseModal } from "../BaseModal/BaseModal.jsx";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm.jsx";
import s from "./UserSettingsModal.module.css";

const UserSettingsModal = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className={s.userSetWrap}>
        <h2>Setting</h2>
        <UserSettingsForm onClose={onClose} />
      </div>
    </BaseModal>
  );
};

export default UserSettingsModal;
