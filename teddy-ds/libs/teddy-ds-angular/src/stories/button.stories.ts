
import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent} from "./../components/button/button.component"

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button Angular',
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    size: "large"
  },
};
