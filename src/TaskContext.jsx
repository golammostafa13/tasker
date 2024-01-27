// TaskContext.js
import { createContext, useContext, useReducer } from "react";

const TaskContext = createContext();

const initialState = {
  isShowModal: false,
  tasks: [],
  task: {
    title: "",
    description: "",
    tags: "",
    priority: "",
  },
  searchTerm: "",
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, isShowModal: true };
    case "HIDE_MODAL":
      return { ...state, isShowModal: false };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "SET_TASK":
      return {
        ...state,
        task: { ...state.task, [action.payload.name]: action.payload.value },
      };
    case "SET_EDIT_TASK":
      return {
        ...state,
        task: { ...action.payload },
      };
    case "RESET_TASK":
      return {
        ...state,
        task: { ...initialState.task },
      };
    case "DELETE_TASK": {
      const taskId = action.payload;
      const updatedTasks = state.tasks.filter((task) => task.id !== taskId);
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case "UPDATE_TASK": {
      const editedTask = action.payload;

      const taskIndex = state.tasks.findIndex(
        (task) => task.id === editedTask.id
      );

      const updatedTasks = [...state.tasks];
      updatedTasks[taskIndex] = editedTask;

      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case "TOGGLE": {
      const editedTask = action.payload;

      const taskIndex = state.tasks.findIndex(
        (task) => task.id === editedTask.id
      );

      const updatedTasks = [...state.tasks];
      updatedTasks[taskIndex] = {
        ...editedTask,
        isFavorite: !editedTask.isFavorite, // Toggle the isFavorite property
      };

      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case "DELETE_ALL":
      return initialState;
    case "SEARCH":
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

export { TaskProvider, useTaskContext };
