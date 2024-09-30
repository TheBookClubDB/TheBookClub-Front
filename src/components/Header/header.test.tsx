import {render, screen} from '@testing-library/react'
import {describe, expect, test} from 'vitest'
import Header from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Testa o componente da Header', () => {

  test('Deve verificar a renderização', () => {
    render(
    <BrowserRouter>
        <Header/>
    </BrowserRouter>)
    const logo = screen.getByRole('logo')
    const sobre = screen.getByText("O que é Bookclub?")
    const contato = screen.getByText("Contato")
    const administrador = screen.getByText("Administrador")

    const componentes = [logo, sobre, contato, administrador]

    componentes.forEach((componente => {
        expect(componente).toBeVisible()
    }))
  })

  test("Testa Redirecionamento da Home", () => {
    render(
    <BrowserRouter>
        <Header/>
    </BrowserRouter>)
    
    const logo = screen.getByRole("logo")
    expect(logo).toBeVisible()

    logo.click();
    expect(window.location.pathname).toBe("/")
  })

  test("Testa Redirecionamento do Sobre", () => {
    render(
    <BrowserRouter>
        <Header/>
    </BrowserRouter>)
    
    const sobre = screen.getByText("O que é Bookclub?")
    expect(sobre).toBeVisible()

    sobre.click();
    expect(window.location.pathname).toBe("/sobre")
  })

  test("Testa Redirecionamento do Contato", () => {
    render(
    <BrowserRouter>
        <Header/>
    </BrowserRouter>)
    
    const contato = screen.getByText("Contato")
    expect(contato).toBeVisible()

    contato.click();
    expect(window.location.pathname).toBe("/contato")
  })

  test("Testa Redirecionamento do Administrador", () => {
    render(
    <BrowserRouter>
        <Header/>
    </BrowserRouter>)
    
    const administrador = screen.getByText("Administrador")
    expect(administrador).toBeVisible()

    administrador.click();
    expect(window.location.pathname).toBe("/adm")
  })
});