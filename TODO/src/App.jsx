import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import InputForm from "./components/InputForm";
import { TasksListProvider } from "./reductor";
import TasksList from "./components/TasksList";
import './index.css'

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TasksListProvider>
        <Box
          component="section"
          id="main"
          margin="0 auto"
        >
          <h1 className="main__title">TO DO</h1>
          <InputForm />
          <TasksList />
        </Box>
      </TasksListProvider>
    </React.Fragment>
  );
}
