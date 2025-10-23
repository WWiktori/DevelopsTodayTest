import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { ToastContainer } from './ToastContainer';
import { useState } from 'react';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
      description: 'Type of the toast notification',
    },
    message: {
      control: 'text',
      description: 'Message to display',
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds (0 = no auto-close)',
    },
    closable: {
      control: 'boolean',
      description: 'Show close button',
    },
  },
  decorators: [
    Story => (
      <ToastContainer>
        <Story />
      </ToastContainer>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    message: 'Your changes have been saved successfully!',
    type: 'success',
    duration: 0,
  },
};

export const Error: Story = {
  args: {
    message: 'An error occurred while processing your request.',
    type: 'error',
    duration: 0,
  },
};

export const Warning: Story = {
  args: {
    message: 'Please review your input before submitting.',
    type: 'warning',
    duration: 0,
  },
};

export const Info: Story = {
  args: {
    message: 'New updates are available. Click here to refresh.',
    type: 'info',
    duration: 0,
  },
};

export const AutoClose3Seconds: Story = {
  args: {
    message: 'This toast will auto-close in 3 seconds',
    type: 'info',
    duration: 3000,
  },
};

export const AutoClose5Seconds: Story = {
  args: {
    message: 'This toast will auto-close in 5 seconds',
    type: 'success',
    duration: 5000,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    message: 'This toast cannot be manually closed',
    type: 'info',
    closable: false,
    duration: 0,
  },
};

export const LongMessage: Story = {
  args: {
    message:
      'This is a longer message to demonstrate how the toast handles multi-line content. It should wrap nicely and maintain good readability.',
    type: 'warning',
    duration: 0,
  },
};

// Interactive example with button
export const InteractiveExample: Story = {
  render: () => {
    const [toasts, setToasts] = useState<
      Array<{ id: number; message: string; type: 'success' | 'error' | 'info' | 'warning' }>
    >([]);

    const showToast = (
      type: 'success' | 'error' | 'info' | 'warning',
      message: string
    ) => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, type, message }]);
    };

    const removeToast = (id: number) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
      <div style={{ padding: '20px' }}>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '20px',
          }}
        >
          <button
            onClick={() => showToast('success', 'Operation completed!')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Show Success
          </button>
          <button
            onClick={() => showToast('error', 'Something went wrong!')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Show Error
          </button>
          <button
            onClick={() => showToast('warning', 'Please be careful!')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f59e0b',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Show Warning
          </button>
          <button
            onClick={() => showToast('info', 'Here is some information.')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Show Info
          </button>
        </div>

        <ToastContainer>
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              duration={3000}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </ToastContainer>
      </div>
    );
  },
};

