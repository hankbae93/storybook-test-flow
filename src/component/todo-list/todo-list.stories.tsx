import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TodoList } from ".";

export default {
  title: "component/Todo List",
  component: TodoList,
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
