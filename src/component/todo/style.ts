import styled from "styled-components";

export const TodoWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fff;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;

  :last-child {
    border: none;
  }

  :hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const TodoLeftBox = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const TodoInput = styled.input`
  display: none;

  :checked {
    + div svg {
      opacity: 1;
    }

    + div + p {
      color: #ccc;
      text-decoration: line-through;
    }
  }
`;

export const TodoCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border: 1px solid #ccc;

  svg {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

export const TodoContent = styled.p`
  flex: 1;
  margin: 0;
`;

export const TodoPin = styled.em``;
