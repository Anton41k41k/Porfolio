import { createContext, useReducer } from "react";

export const TasksListContext = createContext(null);
export const TasksListDispatchContext = createContext(null);

function getLocalStorage() {
  const save = localStorage.getItem("tasksList");
  if (save === null){
    return initialTasksList;
  } else {
    const initial = JSON.parse(save);
    return initial;
  }

}

const saveList = getLocalStorage()

export const initialTasksList = [];

export function TasksListProvider({ children }) {
  const [tasksList, dispatch] = useReducer(tasksListReducer, saveList);
  return (
    <TasksListContext.Provider value={tasksList}>
      <TasksListDispatchContext.Provider value={dispatch}>
        {children}
      </TasksListDispatchContext.Provider>
    </TasksListContext.Provider>
  );
}

export default function tasksListReducer(tasksList, action) {
  switch (action.type) {
    case "addTask": {
      return [
        ...tasksList,
        { id: action.id, text: action.text, isSuccess: action.isSuccess },
      ];
    }
    case "deleteTask": {
      return tasksList.filter((task) => task.id !== action.currentId);
    }
    case "successTask": {
      return tasksList.map((task) => {
        if (task.id !== action.currentId) {
          return task;
        } else {
          return { ...task, isSuccess: action.isSuccess };
        }
      });
    }

    case "changeTask": {
      return tasksList.map((task) => {
        if (task.id !== action.currentId) {
          return task;
        } else {
          return { ...task, text: action.text };
        }
      });
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
