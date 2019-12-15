import React from "react";
import ReactModal from "react-modal";

const Modal = ({
  open,
  toggle,
  width,
  top,
  children,
  title,
  overlayClose,
  bg
}) => {
  React.useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  const overlayStyles = {
    zIndex: 100,
    backgroundColor: "rgba(0, 0, 0, .9)",
    overflowY: "auto"
  };

  const contentStyles = {
    position: "absolute",
    maxWidth: width ? width : 700,
    minHeight: 300,
    top: top ? top : 80,
    left: 8,
    right: 8,
    bottom: "auto",
    margin: "auto",
    border: "none",
    borderRadius: 8,
    backgroundColor: bg ? bg : "white",
  };

  return (
    <ReactModal
      isOpen={open}
      contentLabel={title}
      style={{ overlay: overlayStyles, content: contentStyles }}
      onRequestClose={() => toggle(false)}
      shouldCloseOnOverlayClick={overlayClose}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
