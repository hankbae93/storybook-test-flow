import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TodoList } from ".";
import Todo from "../todo/todo.stories";

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
  list: [
    { id: "1", checked: false, title: "Build a date picker" },
    { id: "2", checked: false, title: "QA dropdown" },
    {
      id: "3",
      checked: false,
      title: "Write a schema for account avatar component",
    },
    { id: "4", checked: false, title: "Export logo" },
    { id: "5", checked: false, title: "Fix bug in input error checked" },
    { id: "6", checked: false, title: "Draft monthly blog to customers" },
  ],
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
