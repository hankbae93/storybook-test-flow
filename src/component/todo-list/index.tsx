import { useState } from "react";
import { TodoData } from "../todo/type";
import { TodoListProps } from "./type";

export const TodoList = ({ list }: TodoListProps) => {
  const [data, setData] = useState<TodoData[]>(list);

  return <div>TodoList</div>;
};
