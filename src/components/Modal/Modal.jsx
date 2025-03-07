import css from './Modal.module.css';
import Modal from 'react-modal';


const sprite = '/img/sprite.svg';

Modal.setAppElement('#root'); 

export const BaseModal = ({isOpen, onClose, children }) =>{
    return (
        <ReactModal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      overlayClassName={css.overlay}
    >
    <button type="button" className={css.close} onClick={onClose}>
    <svg className={css.svgClose}>
          <use href={`${sprite}#`} />
        </svg>
    </button>
     {children}

    </ReactModal>
    );
};
