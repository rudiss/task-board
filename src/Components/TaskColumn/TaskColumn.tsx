import React from "react";
import { Column, Task } from "../../types";
import { AddTaskBtn, Container, Header } from "./TaskColumn.styles";
import TaskContent from "../TaskContent/TaskContent";

type TaskColumnProps = {
  column: Column;
  tasks?: Task[];
  createTask: (columnId: number) => void;
  moveTask: (
    taskId: number,
    targetColumnId: number
  ) => void;
};
const TaskColumn: React.FC<TaskColumnProps> = ({
  column,
  tasks,
  createTask,
  moveTask,
}) => {
  return (
    <Container>
      <Header backgroundColor={column.backgroundColor}>{column?.title}</Header>
      {tasks?.map((task, index) => (
        <TaskContent
          key={index}
          task={task}
          // @ts-ignore
          moveTask={moveTask(index)}
          columnId={column.id}
        />
      ))}
      <AddTaskBtn onClick={() => createTask(column.id)}>
        + Add a task
      </AddTaskBtn>
    </Container>
  );
};

export default TaskColumn;
