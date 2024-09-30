import { render, screen, fireEvent } from '@testing-library/react'
import {describe, expect, test, vi} from 'vitest'
import Button from './Botao'
 
describe('Testa o Componente de Botão', () => {
  const label = 'Click me'
  const onClickMock = vi.fn()
  test('Renderiza o botão', () => {
    render(<Button texto={label} onClick={() => {}} />)
  })
 
  test('Testa o clique do botão', () => {
    render(<Button texto={label} onClick={onClickMock} />)
 
    fireEvent.click(screen.getByText(label))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})