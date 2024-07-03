import type { Meta, StoryObj } from '@storybook/react';
import { Button  } from './../components';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button React',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    size: "large",
    title: "Button React"
  },
};
