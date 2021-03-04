import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

// Nada nos limita para tener un sólo componente por archivo. En este caso vamos a crear un segundo componente interno que se utiliza en el principal.

const ModalOverlay = ({
  className,
  style,
  headerClass,
  header,
  onSubmit,
  contentClass,
  children,
  footerClass,
  footer,
}) => {
  const content = (
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>{children}</div>
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal'));
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        {/* Mediante {...props} pasamos el resto de props configurados en la modal al componente seleccionado */}
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
