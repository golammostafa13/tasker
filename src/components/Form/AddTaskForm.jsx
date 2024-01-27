import { PropTypes } from "prop-types";
import { useTaskContext } from "../../TaskContext";
import { taskFormFields } from "../../utils/constant";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

const options = [
  { name: "Low", value: "Low" },
  { name: "High", value: "High" },
  { name: "Normal", value: "Normal" },
];

const AddTaskForm = (props) => {
  const { state, dispatch } = useTaskContext();
  const { onClose } = props;
  const { task } = state;

  const handleAddTaskSubmit = () => {
    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), isFavorite: false, ...task },
    });
    dispatch({ type: "RESET_TASK" });
    onClose();
  };

  const handleUpdateTask = () => {
    dispatch({ type: "UPDATE_TASK", payload: task });
    dispatch({ type: "RESET_TASK" });
    onClose();
  };

  const setData = (name, value) => {
    dispatch({ type: "SET_TASK", payload: { name, value } });
  };

  return (
    <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
      <button
        style={{
          display: "block",
          float: "right",
          padding: "6px 8px",
          border: "1px solid red",
          background: "#191D26",
          borderRadius: "4px",
        }}
        onClick={() => onClose()}
      >
        Close
      </button>

      <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        Add New Task
      </h2>

      <div className="space-y-9 text-white lg:space-y-10">
        {taskFormFields.map((field) => {
          if (field.name === "priority") {
            field.options = [...options];
          }
          const value = task[field.name];
          switch (field.type) {
            case "text":
              return (
                <div
                  key={field.id}
                  className={`${
                    field.isInputGroup ? "col-span-2" : "col-span-1"
                  } max-md:space-y-9`}
                >
                  <TextInput {...field} value={value} setData={setData} />
                </div>
              );
            case "textarea":
              return (
                <TextAreaInput
                  key={field.id}
                  {...field}
                  value={value}
                  setData={setData}
                />
              );
            case "select":
              return (
                <div
                  key={field.id}
                  className={`${
                    field.isInputGroup ? "col-span-2" : "col-span-1"
                  } max-md:space-y-9`}
                >
                  <SelectInput
                    id={field.id}
                    {...field}
                    value={value}
                    setData={setData}
                  />
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
      <div className="mt-16 flex justify-center lg:mt-20">
        {!task?.id ? (
          <button
            type="button"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={handleAddTaskSubmit}
          >
            Create new Task
          </button>
        ) : (
          <button
            type="button"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={handleUpdateTask}
          >
            Update Task
          </button>
        )}
      </div>
    </form>
  );
};

AddTaskForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddTaskForm;
