import { useTaskContext } from "../TaskContext";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskTable from "./TaskTable";

const TaskListSection = () => {
  const { state, dispatch } = useTaskContext();

  const handleAddTask = () => {
    dispatch({ type: "SHOW_MODAL" });
  };

  const handleCloseModal = () => {
    dispatch({ type: "HIDE_MODAL" });
  };

  const handleDeleteAll = () => {
    dispatch({ type: "DELETE_ALL" });
  };

  const handleDelete = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const handleEdit = (task) => {
    dispatch({ type: "SHOW_MODAL" });
    dispatch({ type: "SET_EDIT_TASK", payload: task });
  };

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <SearchTask />
              <button
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                onClick={handleAddTask}
              >
                Add Task
              </button>
              <button
                className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
                onClick={handleDeleteAll}
              >
                Delete All
              </button>
            </div>
          </div>
          <div className="overflow-auto">
            {state.tasks?.length > 0 ? (
              <TaskTable handleDelete={handleDelete} handleEdit={handleEdit} />
            ) : (
              <p
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Task List is empty!
              </p>
            )}
          </div>
        </div>
      </div>
      {state.isShowModal && <AddTaskModal onClose={handleCloseModal} />}
    </section>
  );
};

export default TaskListSection;
