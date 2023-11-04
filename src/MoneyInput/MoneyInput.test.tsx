import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import MoneyInput from './MoneyInput'

describe('<MoneyInput>', () => {
  it('renders with an empty field', () => {
    render(<MoneyInput />)
    const input = screen.getByRole('spinbutton')

    expect(input).toHaveValue(null)
  })

  it('renders with a default value & allows user to update it', () => {
    render(<MoneyInput value={10} />)
    const input = screen.getByRole('spinbutton')

    expect(input).toHaveValue(10)

    fireEvent.change(input, { target: { value: '25' } })
    waitFor(() => {
      expect(input).toHaveValue(25)
    })
  })
})