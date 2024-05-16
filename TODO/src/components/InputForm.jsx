import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { TasksListContext, TasksListDispatchContext } from "../reductor";

export default function InputForm() {
  const [text, setText] = useState("");
  const tasksList = useContext(TasksListContext);
  const dispatch = useContext(TasksListDispatchContext);
  useEffect(() => {
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
  }, [tasksList]);

  function handleAddTask(e) {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    dispatch({
      type: "addTask",
      id: nextId++,
      text: text.trim(),
      isSuccess: false,
    });
    setText("");
  }
  return (
    <Box
      component="form"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={4}
      width="100%"
      onSubmit={(e) => {
        handleAddTask(e);
      }}
    >
      <TextField
        label="Имя новой задачи"
        autoComplete="off"
        variant="standard"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ paddingLeft: "10px" }}>
              <IconButton
                type="submit"
                disabled={text.trim().length === 0 ? true : false}
              >
                <AddIcon sx={{ color: "#1975ff" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}


let nextId =
  localStorage.getItem("tasksList") === null
    ? 0
    : JSON.parse(localStorage.getItem("tasksList")).reduce(
        (max, item) => (item.id > max ? item.id : max),
        0
      ) + 1;