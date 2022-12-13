export interface TodoData {
  id: number | string;
  title: string;
  checked: boolean;
  pinned?: boolean;
}

export interface TodoProps {
  /**
   * Todo의 데이터를 컴포넌트에 표시합니다.
   */
  todo: TodoData;
  onEditTitle: (title: string) => void;
  onTogglePinTask: (id: string | number) => void;
  onArchiveTodo: (id: string | number) => void;
}
