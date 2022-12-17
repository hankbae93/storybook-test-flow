import React from 'react';
import TodoApp from './index';
import {Default as TodoListDefault} from '../todo-list/todo-list.stories';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {rest} from "msw";

export default {
  component: TodoApp,
  title: 'component/todo-list',
}as ComponentMeta<typeof TodoApp> ;

const Template: ComponentStory<typeof TodoApp>  =  () => <TodoApp/>


export const TodoDefault = Template.bind({});
TodoDefault.parameters = {
  msw: {
    handlers: [
      rest.get('/todo', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(TodoListDefault.args));
      }),
    ],
  },
};

export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [
      rest.get('/todo', (req, res, ctx) => {
        return  res(
            ctx.status(200),
            ctx.json([]));
      }),
    ],
  },
};