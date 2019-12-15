import React, { useState } from "react";
import Modal from "./Modal";
import { LabelCircle } from "../styles/Styles";

const SizesTable = () => {
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
      <Modal open={open} toggle={setOpen} title="Таблица размеров">
        Таблица размеров
      </Modal>
    </>
  );
};

export default SizesTable;
