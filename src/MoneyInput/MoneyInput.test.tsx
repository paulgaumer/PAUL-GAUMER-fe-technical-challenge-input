import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import MoneyInput from './MoneyInput'

const logSpy = vi.spyOn(console, 'log')

describe('<MoneyInput>', () => {
  it('renders with an empty field', () => {
    render(<MoneyInput />)
    const input = screen.getByRole('spinbutton')

    expect(input).toHaveValue(null)
  })

  it('converts a default value from cents to decimal', async () => {
    render(<MoneyInput value={100} />)
    const input = screen.getByRole('spinbutton')

    expect(input).toHaveValue(1)
  })

  it('accepts user input in decimal and logs it in cents', async () => {
    render(<MoneyInput value={150} />)
    const input = screen.getByRole('spinbutton')

    expect(input).toHaveValue(1.5)

    fireEvent.change(input, { target: { value: '2.58' } })
    await waitFor(() => {
      expect(input).toHaveValue(2.58)
      expect(logSpy).toHaveBeenCalledWith('New value in cents: 258')
    })
  })

  it('logs its value in cents on blur', async () => {
    render(<MoneyInput value={150} />)
    const input = screen.getByRole('spinbutton')

    fireEvent.blur(input)
    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith('New value in cents: 150')
    })
  })

  it('displays a label', () => {
    render(<MoneyInput label="Sum in Euro" />)
    expect(screen.getByRole('spinbutton', { name: 'Sum in Euro' })).toBeInTheDocument()
  })

  it('can be disabled', () => {
    render(<MoneyInput disabled />)
    const input = screen.getByRole('spinbutton')

    expect(input).toHaveAttribute('disabled')
  })

  it('makes its error state accessible', () => {
    render(<MoneyInput error="Error message" />)
    const input = screen.getByRole('spinbutton')

    expect(input).toHaveAttribute('aria-invalid', 'true')
  })
})
