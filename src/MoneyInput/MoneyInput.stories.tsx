import { Meta } from '@storybook/react'
import MoneyInput from './MoneyInput'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MoneyInput',
  component: MoneyInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: { type: 'text' }, description: 'Set a label for the field' },
    value: { control: { type: 'number' }, description: 'Set a default value in cents' },
    error: { control: { type: 'text' }, description: 'Set an error message for the field' },
    locale: { control: { type: 'text' }, description: 'Set a locale to format the field' },
    disabled: { control: { type: 'boolean' }, description: 'Disable the field' },
  },
} satisfies Meta<typeof MoneyInput>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    label: 'Total in Euro',
    value: 1250,
    error: '',
    locale: 'en-US',
    disabled: false,
  },
}

export const WithLocale = {
  args: {
    locale: 'de-DE',
    value: 125456,
  },
}

export const WithError = {
  args: {
    error: 'Error message',
  },
}

export const Disabled = {
  args: {
    disabled: true,
    placeholder: '0',
  },
}
