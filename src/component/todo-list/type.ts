import { TodoData } from "../todo/type";

export interface TodoListProps {
  loading: boolean;
  list: TodoData[];
  onEditTitle: (title: string) => void;
  onTogglePinTask: (id: string | number) => void;
  onArchiveTodo: (id: string | number) => void;
}
