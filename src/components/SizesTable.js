import React, { useState } from "react";
import Modal from "./Modal";
import { LabelCircle } from "../styles/Styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../redux/cart/cart.selectors";

const SizesTable = ({ hidden }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <LabelCircle
        as="button"
        bg="white"
        fontSize={2}
        onClick={() => setOpen(true)}
      >
        ?
      </LabelCircle>
      <Modal open={hidden && open} toggle={setOpen} title="Таблица размеров">
        Таблица размеров
      </Modal>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(SizesTable);
