import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Todo } from ".";

export default {
	title: "component/Todo",
	component: Todo,
	argTypes: {
		todo: {},
	},
} as ComponentMeta<typeof Todo>;

const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = {
	todo: {
		id: 0,
		title: "TODO",
		state: "NONE",
	},
};
