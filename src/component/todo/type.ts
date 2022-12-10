export interface TodoData {
	id: number;
	title: string;
	state: string;
}

export interface TodoProps {
	/**
	 * Todo의 데이터를 컴포넌트에 표시합니다.
	 */
	todo: TodoData;
	pinned?: boolean;
	onEditTitle?: () => void;
	onTogglePinTask?: () => void;
	onArchiveTodo?: () => void;
}
