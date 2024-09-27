import { render, screen, fireEvent } from '@testing-library/React'
import Button from './Button'
 
describe('Button Component', () => {
  test('renders with the correct label', () => {
    const label = 'Click me'
    render(<Button label={label} onClick={() => {}} />)
 
    // Verifica se o botão está no documento com o texto correto
  })
 
  test('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn() // Cria uma função mock
    const label = 'Click me'
    render(<Button label={label} onClick={onClickMock} />)
 
    // Simula um clique no botão
    fireEvent.click(screen.getByText(label))
 
    // Verifica se a função mock foi chamada
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})