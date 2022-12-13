import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";

import {
  TodoContent,
  TodoLeftBox,
  TodoCheckbox,
  TodoWrapper,
  TodoInput,
} from "./style";
import { TodoProps } from "./type";

export const Todo = ({
  todo,
  pinned,
  onArchiveTodo,
  onEditTitle,
  onTogglePinTask,
}: TodoProps) => {
  return (
    <TodoWrapper>
      <TodoLeftBox>
        <TodoInput type="checkbox" checked={todo.checked} />

        <TodoCheckbox onClick={() => onArchiveTodo(todo.id)}>
          <FaCheck size={20} />
        </TodoCheckbox>

        <TodoContent onClick={() => onEditTitle(todo.title)}>
          {todo.title}
        </TodoContent>
      </TodoLeftBox>

      <FaStar
        onClick={() => onTogglePinTask(todo.id)}
        color={pinned ? "#FED049" : "#eee"}
      />
    </TodoWrapper>
  );
};
