import React from 'react';
import TodoApp from './index';
import {Default as TodoListDefault} from '../todo-list/todo-list.stories';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {rest} from "msw";
import {findByRole, userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';

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

export const TodoAppPinTask = Template.bind({})
TodoAppPinTask.parameters = TodoDefault.parameters;
TodoAppPinTask.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const getTask = (name: string) => canvas.findByRole('listitem', {name})

  // // Find the todo to pin
  const itemToPin = await getTask('Build a date picker')


  // Find the pin button
  const pinButton = await findByRole(itemToPin,'button' , { name: 'pin' });

  // Click the pin button
  await userEvent.click(pinButton);

  // Check that the pin button is now an unpin button
  const unpinButton = within(itemToPin).getByRole('button' , { name: 'pin' });
  await expect(unpinButton).toBeInTheDocument();
}


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