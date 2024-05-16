import { useContext, useState } from "react";
import { TasksListContext, TasksListDispatchContext } from "../reductor";
import {
  Checkbox,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/EditOutlined";
import DoneIcon from "@mui/icons-material/Done";

export default function PlaneTasks() {
  const tasksList = useContext(TasksListContext);
  const dispatch = useContext(TasksListDispatchContext);
  const [editingTask, setEditingTask] = useState({ id: -1, text: "" });

  function handleSuccessTask(id) {
    dispatch({
      type: "successTask",
      currentId: id,
      isSuccess: true,
    });
  }

  function handleChangeTask(id, text) {
    dispatch({
      type: "changeTask",
      currentId: id,
      text: text,
    });
    setEditingTask({ id: -1, text: "" });
  }

  function handleDeleteTask(id) {
    dispatch({
      type: "deleteTask",
      currentId: id,
    });
  }
  return (
    <List>
      {tasksList.filter((task) => task.isSuccess !== true).length !== 0 ? (
        <h2 className="tasksList__title">
          План({tasksList.filter((task) => task.isSuccess !== true).length})
        </h2>
      ) : null}
      {tasksList
        .filter((task) => task.isSuccess !== true)
        .map((task) => {
          if (editingTask.id === task.id) {
            return (
              <ListItem
                key={task.id}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                }}
              >
                <TextField
                  component="form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (editingTask.text === "") {
                      handleChangeTask(task.id, task.text);
                    } else {
                      handleChangeTask(task.id, editingTask.text);
                    }
                  }}
                  autoComplete="off"
                  autoFocus
                  variant="standard"
                  className="changeTaskInput"
                  defaultValue={task.text}
                  onChange={(e) =>
                    setEditingTask({ ...editingTask, text: e.target.value })
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ paddingLeft: "10px" }}
                      >
                        <IconButton type="submit" sx={{ padding: "0px" }}>
                          <DoneIcon sx={{ color: "#1975ff" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </ListItem>
            );
          } else {
            return (
              <ListItem
                key={task.id}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "8fr 1fr 1fr",
                  padding: "0",
                }}
              >
                <ListItemButton
                  role={undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSuccessTask(task.id);
                  }}
                >
                  <ListItemIcon>
                    <Checkbox edge="start" tabIndex={-1} disableRipple />
                  </ListItemIcon>
                  <ListItemText primary={task.text} />
                </ListItemButton>
                <ListItemButton
                  onClick={() =>
                    setEditingTask({ ...editingTask, id: task.id })
                  }
                >
                  <EditIcon className="edit__button" />
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
            );
          }
        })}
    </List>
  );
}
