import { render, screen } from '@testing-library/react'
import Header from '../Header/Header'

test('Check site logo', () => {
  render(<Header />)
  const logo = screen.getByTestId('logo')
  expect(logo).toBeInTheDocument()
})

test('Check site title', () => {
  render(<Header />)
  const title = screen.getByTestId('title')
  expect(title).toBeInTheDocument()
})
