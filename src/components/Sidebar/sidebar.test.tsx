import {render, screen} from '@testing-library/react'
import {describe, expect, test} from 'vitest'
import Sidebar from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Testa o componente da Sidebar', () => {

  test('Deve verificar o campo de pesquisa', () => {
    render(
      <BrowserRouter>
        <Sidebar pagina="cAutor"/>
      </BrowserRouter>)
    const abaCadastros = screen.getByText('Cadastros')
    expect(abaCadastros).toBeVisible()
  })

  test('Deve Verificar os botões do componente', () => {
    render(
      <BrowserRouter>
        <Sidebar pagina="cAutor"/>
      </BrowserRouter>)
    const abaAlugueis = screen.getByText('Aluguéis')
    const abaCadastros = screen.getByText('Cadastros')
    const abaGerenciar = screen.getByText('Gerenciar')
    const btnCAutores = screen.getByText('Autores');
    const btnCLocatarios = screen.getByText('Locatários');
    const btnCLivros = screen.getByText('Livros');
        
    const buttons = [abaAlugueis, abaCadastros, abaGerenciar, btnCAutores, btnCLocatarios, btnCLivros]
        
    buttons.forEach(button => {
      expect(button).toBeVisible()
    })
  });

  test('Deve verificar o botão selecionado', () => {
    render(
      <BrowserRouter>
        <Sidebar pagina="cAutor"/>
      </BrowserRouter>)
    const btnAutor = screen.getByText('Autores')
    expect(btnAutor).toHaveStyle('backgroundColor: rbg(255, 255, 255)')
  })
});