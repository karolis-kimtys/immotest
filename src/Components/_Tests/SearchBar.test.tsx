import { render, screen } from '@testing-library/react'
import SearchBar from '../Body/SearchBar/SearchBar'

test('Check component title', () => {
  render(<SearchBar />)
  const title = screen.getByTestId('title')
  expect(title).toBeInTheDocument()
})

test('Check component has search input field', () => {
  render(<SearchBar />)
  const input = screen.getByTestId('input-field')
  expect(input).toBeInTheDocument()
})

test('Check component has search button', () => {
  render(<SearchBar />)
  const button = screen.getByTestId('search-button')
  expect(button).toBeInTheDocument()
})
