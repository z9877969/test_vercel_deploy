import css from './Modal.module.css';
import Modal from 'react-modal';


const sprite = '/sprite.svg';


Modal.setAppElement('#root'); 

export const BaseModal = ({isOpen, onClose, children }) =>{
    return (
        <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName={css.overlay}
      
    >
    <button type="button" className={css.close} onClick={onClose}>
       <svg className={css.svgClose}>
          <use href={`${sprite}#icon-close`} />
       </svg>
    </button>
     {children}

    </Modal>
    );
};
