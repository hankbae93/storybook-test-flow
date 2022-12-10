import React from "react";
import {
	TodoContent,
	TodoIcon,
	TodoLeftBox,
	TodoState,
	TodoWrapper,
} from "./style";
import { TodoProps } from "./type";

export const Todo = ({ todo }: TodoProps) => {
	return (
		<TodoWrapper>
			<TodoLeftBox>
				<TodoState>{todo.state === "FINISH" ? "X" : "O"}</TodoState>
				<TodoContent>{todo.title}</TodoContent>
			</TodoLeftBox>

			<TodoIcon>📌</TodoIcon>
		</TodoWrapper>
	);
};
