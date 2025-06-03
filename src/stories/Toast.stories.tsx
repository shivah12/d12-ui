import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '../components/ui/toaster';
import { useToast } from '../hooks/use-toast';
import { Button } from '../components/Button';

const meta = {
  title: 'ui/Toast',
  component: Toaster,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: 'Scheduled: Catch up',
              description: 'Friday, February 10, 2023 at 5:57 PM',
            });
          }}
        >
          Show Toast
        </Button>
        <Toaster />
      </>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
              action: <button className="px-2 py-1 bg-primary text-primary-foreground rounded">Try again</button>,
            });
          }}
        >
          Show Toast with Action
        </Button>
        <Toaster />
      </>
    );
  },
};

export const WithTitleAndDescription: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: 'Toast Title',
              description: 'This is a toast description.',
            });
          }}
        >
          Show Toast with Title and Description
        </Button>
        <Toaster />
      </>
    );
  },
}; 