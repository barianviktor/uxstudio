import Backdrop from "../Backdrop";

const Modal = ({ handleClose, children }) => {
  return <Backdrop onClick={handleClose}>{children}</Backdrop>;
};
export default Modal;
