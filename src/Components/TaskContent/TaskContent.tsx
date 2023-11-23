import React from "react";
import { Task } from "../../types";
import { ArrowsBtn, Container, TaskLabel } from "./TaskContent.styles";
import { defaultCols } from "../TaskBoard/TaskBoard";

type TaskContentProps = {
  task: Task;
  columnId: number;
  moveTask: (
    taskId: number,
    targetColumnId: number
  ) => void;
};

const TaskContent: React.FC<TaskContentProps> = ({
  task,
  columnId,
  moveTask,
}) => {
  return (
    <Container>
      <ArrowsBtn
        onClick={() => moveTask(task.id, columnId - 1)}
        disabled={columnId === 1}
      >
        {"<"}
      </ArrowsBtn>
      <TaskLabel>{task?.content}</TaskLabel>
      <ArrowsBtn
        onClick={() => moveTask(task.id, columnId + 1)}
        disabled={columnId === defaultCols.length}
      >
        {">"}
      </ArrowsBtn>
    </Container>
  );
};

export default TaskContent;
