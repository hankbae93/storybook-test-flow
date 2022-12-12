import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Todo } from ".";
import { TodoData } from "./type";

export default {
  title: "component/Todo",
  component: Todo,
  argTypes: {
    todo: {},
    pinned: {
      type: "boolean",
      controls: "boolean",
    },
    onArchiveTask: { action: "onArchiveTask" },
    onTogglePinTask: { action: "onTogglePinTask" },
    onEditTitle: { action: "onEditTitle" },
  },
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

const mock: TodoData = {
  id: 0,
  title: "TODO",
  checked: false,
};

export const Default = Template.bind({});
Default.args = {
  todo: mock,
};

export const Finish = Template.bind({});
Finish.args = {
  todo: {
    ...mock,
    checked: true,
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  todo: mock,
  pinned: true,
};

const longTextString =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla libero accusamus magni harum optio eligendi, architecto iste vitae nesciunt officiis ea numquam possimus, debitis atque quidem corrupti, incidunt explicabo fugiat?";

export const LongText = Template.bind({});
LongText.args = {
  todo: {
    ...mock,
    title: longTextString,
  },
};
