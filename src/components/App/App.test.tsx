import { render, screen, within } from '@testing-library/react'
import App from './App.component'

describe('<App />', () => {
  test('should have the RedRect component in the DOM', () => {
    const appComponent = render(<App />)
    const redRect = within(appComponent.container).getByTestId('red-rect')
    expect(redRect).toBeInTheDocument()
  })
})