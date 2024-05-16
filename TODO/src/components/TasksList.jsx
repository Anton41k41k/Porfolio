import * as React from "react";
import { Box } from "@mui/material";
import PlaneTasks from "./PlaneTasks.jsx";
import SuccessTasks from "./SuccessTasks.jsx";

export default function TasksList() {

  return <Box id="tasksList">
    <PlaneTasks/>
    <SuccessTasks/>
  </Box>;
}
