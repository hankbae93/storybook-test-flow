import React from 'react';
import { FaCheck, FaStar } from 'react-icons/fa';

import { TodoCheckbox, TodoContent, TodoInput, TodoLeftBox, TodoWrapper } from './style';
import { TodoProps } from './type';

export const Todo = ({ todo, onArchiveTodo, onEditTitle, onTogglePinTask }: TodoProps) => {
  return (
    <TodoWrapper aria-label={todo.title}>
      <TodoLeftBox>
        <TodoInput type="checkbox" checked={todo.checked} />

        <TodoCheckbox onClick={() => onArchiveTodo(todo.id)}>
          <FaCheck size={20} />
        </TodoCheckbox>

        <TodoContent onClick={() => onEditTitle(todo.title)}>{todo.title}</TodoContent>
      </TodoLeftBox>

      <div role="button" onClick={() => onTogglePinTask(todo.id)} aria-label={todo?.pinned ? 'pin' : 'unpin'}>
        <FaStar color={todo?.pinned ? '#FED049' : '#eee'} />
      </div>
    </TodoWrapper>
  );
};
