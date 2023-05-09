import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from "./Alert"

const meta = {
    title: 'components/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const BacktickIssue: Story = {
    args: {
    }
}

