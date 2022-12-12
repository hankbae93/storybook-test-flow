import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";

import {
  TodoContent,
  TodoPin,
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

        <TodoCheckbox onClick={onArchiveTodo}>
          <FaCheck size={20} />
        </TodoCheckbox>

        <TodoContent onClick={onEditTitle}>{todo.title}</TodoContent>
      </TodoLeftBox>

      <FaStar onClick={onTogglePinTask} color={pinned ? "#FED049" : "#eee"} />
    </TodoWrapper>
  );
};
