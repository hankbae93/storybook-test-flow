import React from "react";
import {
	TodoContent,
	TodoPin,
	TodoLeftBox,
	TodoState,
	TodoWrapper,
} from "./style";
import { TodoProps } from "./type";

export const Todo = ({ todo, pinned }: TodoProps) => {
	return (
		<TodoWrapper>
			<TodoLeftBox>
				<TodoState>{todo.state === "FINISH" ? "X" : "O"}</TodoState>
				<TodoContent>{todo.title}</TodoContent>
			</TodoLeftBox>

			{pinned && <TodoPin>📌</TodoPin>}
		</TodoWrapper>
	);
};
