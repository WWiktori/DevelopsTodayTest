import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'number', 'email'],
      description: 'Type of the input',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value',
    },
    label: {
      control: 'text',
      description: 'Label for the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const TextInput: Story = {
  args: {
    type: 'text',
    label: 'Full Name',
    placeholder: 'John Doe',
    helperText: 'Enter your full name',
  },
};

export const TextInputClearable: Story = {
  args: {
    type: 'text',
    label: 'Search',
    placeholder: 'Type to search...',
    clearable: true,
    defaultValue: 'Initial value',
  },
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    helperText: 'Password must be at least 8 characters',
  },
};

export const PasswordInputClearable: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    clearable: true,
    defaultValue: 'secret123',
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    label: 'Age',
    placeholder: '0',
    helperText: 'Enter your age',
  },
};

export const NumberInputClearable: Story = {
  args: {
    type: 'number',
    label: 'Amount',
    placeholder: '0.00',
    clearable: true,
    defaultValue: '100',
  },
};

export const EmailInput: Story = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'example@email.com',
    helperText: 'We will never share your email',
  },
};

export const WithError: Story = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'example@email.com',
    defaultValue: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
    defaultValue: 'This is disabled',
  },
};

export const AllFeatures: Story = {
  args: {
    type: 'text',
    label: 'Advanced Input',
    placeholder: 'Type something...',
    clearable: true,
    helperText: 'This input has all features enabled',
    defaultValue: 'Sample text',
  },
};

