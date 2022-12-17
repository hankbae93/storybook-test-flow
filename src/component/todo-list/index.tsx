import { Todo } from '../todo';
import { TodoListProps } from './type';
import styled, { keyframes } from 'styled-components';
import { FaTruckLoading } from 'react-icons/fa';

export const TodoList = ({ list, loading, onArchiveTodo, onEditTitle, onTogglePinTask }: TodoListProps) => {
  const events = {
    onArchiveTodo,
    onEditTitle,
    onTogglePinTask,
  };

  if (loading)
    return (
      <TodolistWrapper>
        <LoadingWrapper>
          <h3>
            Loading <FaTruckLoading />
          </h3>
          <Dot delay="0s" />
          <Dot delay="0.1s" />
          <Dot delay="0.2s" />
        </LoadingWrapper>
      </TodolistWrapper>
    );

  const sortByPinnedList = [...list.filter(todo => todo.pinned), ...list.filter(todo => !todo.pinned)];

  return (
    <TodolistWrapper>
      {sortByPinnedList.length === 0 && <h3>EMPTY</h3>}
      {sortByPinnedList.map(todo => {
        return <Todo todo={todo} {...events} />;
      })}
    </TodolistWrapper>
  );
};

const TodolistWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  padding: 3px;
  margin: 0;
  gap: 4px;
  border: 1px solid #eee;

  > li {
    flex: 1;
    width: 100%;
  }
`;

export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Dot =
  styled.div <
  { delay: string } >
  `
  background-color: black;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
