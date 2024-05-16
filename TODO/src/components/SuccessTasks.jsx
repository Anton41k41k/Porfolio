import { useContext } from "react";
import { TasksListContext, TasksListDispatchContext } from "../reductor";
import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function SuccessTasks() {
  const tasksList = useContext(TasksListContext);
  const dispatch = useContext(TasksListDispatchContext);

  function handlePlanTask(id) {
    dispatch({
      type: "successTask",
      currentId: id,
      isSuccess: false,
    });
  }

  function handleDeleteTask(id) {
    dispatch({
      type: "deleteTask",
      currentId: id,
    });
  }
  return (
    <List>
      {tasksList.filter((task) => task.isSuccess === true).length !== 0 ? (
        <h2 className="tasksList__title">
          Готово({tasksList.filter((task) => task.isSuccess === true).length})
        </h2>
      ) : null}

      {tasksList
        .filter((task) => task.isSuccess === true)
        .map((task) => (
          <ListItem
            key={task.id}
            sx={{
              display: "grid",
              gridTemplateColumns: "9fr 1fr",
              padding: "0",
            }}
          >
            <ListItemButton
              role={undefined}
              onClick={(e) => {
                e.preventDefault();
                handlePlanTask(task.id);
              }}
            >
              <ListItemIcon>
                <Checkbox edge="start" tabIndex={-1} disableRipple checked />
              </ListItemIcon>
              <ListItemText primary={task.text} />
            </ListItemButton>
            <ListItemButton
              onClick={(e) => {
                e.preventDefault();
                handleDeleteTask(task.id);
              }}
            >
              <DeleteIcon className="delete__button" />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
}
