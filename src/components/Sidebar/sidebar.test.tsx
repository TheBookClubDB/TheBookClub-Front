import {render, screen} from "@testing-library/react"
import {describe, expect, test} from "vitest"
import Sidebar from "./index";

describe('Testa o componente da Sidebar', () => {

    test("Deve verificar o campo de pesquisa", () => {
        render(<Sidebar item="autor"/>)
        const campoPesquisa = screen.getByPlaceholderText("Pesquisar")
        expect(campoPesquisa).toBeVisible()
    })

    test('Deve Verificar os botões do componente', () => {
        render(<Sidebar item="autor"/>)
        const btnAluguel = screen.getByText("Aluguel");
        const btnGerenciador = screen.getByText("Gerenciador");
        const btnGAutores = screen.getByText("Gerenciar Autores");
        const btnGLocatarios = screen.getByText("Gerenciar Locatários");
        const btnGLivros = screen.getByText("Gerenciar Livros");
        
        const buttons = [btnAluguel, btnGerenciador, btnGAutores, btnGLocatarios, btnGLivros]
        
        buttons.forEach(button => {
            expect(button).toBeVisible()
        })
    });

    test("Deve verificar o selecionador do botão", () => {
        render(<Sidebar item="autor"/>)
        const btnAutor = screen.getByText("Gerenciar Autores")
        expect(btnAutor).toHaveStyle("backgroundColor: rgba(33, 147, 243, 0.1)")
    })
});