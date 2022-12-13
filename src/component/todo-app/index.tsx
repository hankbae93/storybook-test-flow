import React, { useState } from "react";
import { TodoList } from "../\btodo-list";
import { TodoData, TodoProps } from "../todo/type";
import { mockTodoArray } from "./mockup";

const TodoApp = () => {
  const [data, setData] = useState<TodoData[]>(mockTodoArray);

  const onArchiveTodo: TodoProps["onArchiveTodo"] = (id) => {
    setData((prev) => {
      const newArr = [...prev];
      const index = newArr.findIndex((todo) => todo.id === id);
      newArr[index].checked = !prev[index].checked;
      return newArr;
    });
  };

  const onEditTitle: TodoProps["onEditTitle"] = (title) => {};

  const onTogglePinTask: TodoProps["onTogglePinTask"] = (id) => {
    setData((prev) => {
      const newArr = [...prev];
      const index = newArr.findIndex((todo) => todo.id === id);
      newArr[index].pinned = !prev[index].pinned;
      return newArr;
    });
  };

  const events = {
    onArchiveTodo,
    onEditTitle,
    onTogglePinTask,
  };

  return (
    <div>
      <TodoList list={data} {...events} />
    </div>
  );
};

export default TodoApp;
