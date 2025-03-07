import css from './Modal.module.css';
import Modal from 'react-modal';



Modal.setAppElement('#root'); 

export const Modal = ({isOpen, onClose, children }) =>{
    return (
        <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
      overlayClassName={css.overlay}
    >
    <button type="button" className={css.close} onClick={() => onClose()}></button>
     {children}

    </Modal>
    );
};
