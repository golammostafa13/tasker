import { PropTypes } from "prop-types";
import { useTaskContext } from "../TaskContext";
import { tableFields } from "../utils/constant";
import TagList from "./TagList";

const TaskTable = (props) => {
  const { handleDelete, handleEdit } = props;
  const { state, dispatch } = useTaskContext();
  const { tasks, searchTerm } = state || {};

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredTasks.length === 0 ? (
        <p
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Task List is empty!
        </p>
      ) : (
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              {tableFields.heads.map((head) => {
                return (
                  <th
                    key={head.name}
                    className={`p-4 pb-8 text-sm font-semibold capitalize ${head.width}`}
                  >
                    {head.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
              >
                <td>
                  {!task.isFavorite ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-star"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={() => {
                        dispatch({ type: "TOGGLE", payload: task });
                      }}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-star"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="yellow"
                      fill="yellow"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={() => {
                        dispatch({ type: "TOGGLE", payload: task });
                      }}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                    </svg>
                  )}
                </td>
                <td>{task.title}</td>
                <td>
                  <div>{task.description}</div>
                </td>
                <TagList tags={task.tags} />
                <td className="text-center">{task.priority}</td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      className="text-red-500"
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="text-blue-500"
                      onClick={() => handleEdit(task)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

TaskTable.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default TaskTable;
