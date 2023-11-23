import React, { useState } from "react";
import { TaskBoardContainer } from "./TaskBoard.styles";
import { Column, Task } from "../../types";
import TaskColumn from "../TaskColumn/TaskColumn";

export const defaultCols = [
  {
    id: 1,
    title: "Winnie",
    backgroundColor: "#8d6e95",
  },
  {
    id: 2,
    title: "Brad",
    backgroundColor: "#38a59b",
  },
  {
    id: 3,
    title: "Bob",
    backgroundColor: "#5a86af",
  },
  {
    id: 4,
    title: "Thomas",
    backgroundColor: "#e9741c",
  },
];
const defaultTasks = [
  {
    id: 1,
    columnId: 1,
    content: "buy eggs",
  },
  {
    id: 2,
    columnId: 1,
    content: "buy milk",
  },
  {
    id: 3,
    columnId: 2,
    content: "buy meat",
  },
  {
    id: 4,
    columnId: 2,
    content: "buy vegies",
  },
  {
    id: 5,
    columnId: 3,
    content: "buy vudu",
  },
  {
    id: 6,
    columnId: 3,
    content: "buy apples",
  },
  {
    id: 7,
    columnId: 4,
    content: "buy ham",
  },
  {
    id: 8,
    columnId: 4,
    content: "buy bananas",
  },
  {
    id: 9,
    columnId: 4,
    content: "buy veggie",
  },
];

const TaskBoard: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>(defaultCols);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  const createTask = (columnId: number) => {
    const taskInput = window.prompt("what do do next?");
    if (!taskInput) return;
    const newTask: Task = {
      id: Math.floor(Math.random() * 1000),
      columnId,
      content: taskInput as string,
    };
    setTasks([...tasks, newTask]);
  };

  const filteredList = React.useCallback(
    (columnId: number) => tasks.filter((task) => task.columnId === columnId),
    [tasks]
  );

  const moveTask =
    (position: number) =>
    (taskId: number, targetColumnId: number) => {
      const updatedTasks = [...tasks];
      const taskToMove = updatedTasks.find((task) => task.id === taskId);
      const taskIndex = updatedTasks.findIndex((task) => task.id === taskId);

      const nextColumn = filteredList(targetColumnId)[position];
      updatedTasks.splice(taskIndex, 1);

      const value = updatedTasks.findIndex(
        (item) => item.id === nextColumn?.id
      );

      //  @ts-ignore
      updatedTasks.splice(value, 0, {
        ...taskToMove,
        columnId: targetColumnId,
      });
      setTasks(updatedTasks);
    };

  return (
    <TaskBoardContainer>
      {columns.map((column) => (
        <TaskColumn
          key={column.id}
          column={column}
          tasks={filteredList(column.id)}
          createTask={createTask}
          moveTask={moveTask}
        />
      ))}
    </TaskBoardContainer>
  );
};

export default TaskBoard;
