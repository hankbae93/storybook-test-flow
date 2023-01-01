import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge } from './badge';

export default {
  title: 'component/badge',
  component: Badge,
  argTypes: {
    text: {
        controls: 'text'
    }
  }
} as ComponentMeta<typeof Badge> ;

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '안녕하세요',
};
