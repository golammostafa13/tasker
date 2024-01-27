import { PropTypes } from "prop-types";
import React from "react";
import AddTaskForm from "./Form/AddTaskForm";

const AddTaskModal = (props) => {
  const { onClose } = props;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <AddTaskForm onClose={onClose} />
      </div>
    </div>
  );
};

AddTaskModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddTaskModal;
