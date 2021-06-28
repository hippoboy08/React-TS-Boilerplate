import { render, screen } from '@testing-library/react'
import RedRect from './RedRect.component'

describe('<RedRect />', () => {
  test(' RedRect has a proper CSS class', () => {
    render(<RedRect />)
    const redRect = screen.getByTestId('red-rect')
    expect(redRect).toHaveClass('red')
  })
})
