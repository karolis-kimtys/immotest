import { render, screen, waitFor } from '@testing-library/react'
import PropertyTypes from '../Body/PropertyTypes/PropertyTypes'

test('Check component title', () => {
  render(<PropertyTypes />)
  const title = screen.getByTestId('title')
  expect(title).toBeInTheDocument()
})

test('Check property types', async () => {
  await render(<PropertyTypes />)
  const types = ['all', 'detached', 'semi-detached', 'terraced', 'flat']
  await waitFor(() => {
    types.forEach((type) => {
      const oneType = screen.getByTestId(type)
      expect(oneType).toBeInTheDocument()
    })
  })
})
