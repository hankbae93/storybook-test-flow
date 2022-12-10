import styled from "styled-components";

export const TodoWrapper = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #ccc;
	background: #fff;
	padding: 12px;
	cursor: pointer;
	transition: all 0.3s ease;

	:hover {
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
	}
`;

export const TodoLeftBox = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`;

export const TodoContent = styled.p`
	margin: 0;
`;

export const TodoState = styled.button``;

export const TodoIcon = styled.em``;
