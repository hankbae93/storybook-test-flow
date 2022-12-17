import {ComponentMeta, ComponentStory} from "@storybook/react";
import {TodoList} from ".";
import Todo from "../todo/todo.stories";
import {mockTodoArray} from "../todo-app/mockup";

export default {
  title: "component/Todo List",
  component: TodoList,
  argTypes: {
    ...Todo.argTypes,
  },
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  list: mockTodoArray,
};

export const WithPinnedTodo = Template.bind({});
WithPinnedTodo.args = {
  list: [
    {
      id: "6",
      title: "Draft monthly blog to customers",
      checked: true,
      pinned: true,
    },
    ...(Default.args.list?.slice(0, 5) ?? []),
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  list: Default.args.list ?? [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  list: [],
  loading: false,
};
