import { BaseModal } from "../BaseModal/BaseModal.jsx";
import UserSettingsForm from "../UserSettingsForm/UserSettingsForm.jsx";
import s from "./UserSettingsModal.module.css";

const UserSettingsModal = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h1>Setting</h1>
      <UserSettingsForm onClose={onClose} />
    </BaseModal>
  );
};

export default UserSettingsModal;
