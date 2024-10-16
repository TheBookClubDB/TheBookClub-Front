import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Testa o componente da Header', () => {

  test('Deve verificar a renderização', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>)
    const logo = screen.getByRole('Logo');
    const avatar = screen.getByRole('Avatar');

    const componentes = [logo, avatar];

    componentes.forEach((componente => {
      expect(componente).toBeVisible()
    }))
  })

  test('Testa Redirecionamento da Home', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>)
    const logo = screen.getByRole('Logo')
    expect(logo).toBeVisible()

    logo.click();
    expect(window.location.pathname).toBe('/adm')
  })
 
});