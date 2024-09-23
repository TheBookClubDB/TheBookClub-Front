import {render, screen} from "@testing-library/react"
import {describe, expect, test} from "vitest"
import Sidebar from "./index";

describe('Testa o componente da Sidebar', () => {

    test("Deve verificar o campo de pesquisa", () => {
        render(<Sidebar item="autor"/>)
        const campoPesquisa = screen.queryByPlaceholderText("Pesquisar")
        expect(campoPesquisa).toBeVisible()
    })

    test('Deve Verificar os botões do componente', () => {
        render(<Sidebar item="autor"/>)
        const btnAluguel = screen.queryByText("Aluguel");
        const btnGerenciador = screen.queryByText("Gerenciador");
        const btnGAutores = screen.queryByText("Gerenciar Autores");
        const btnGLocatarios = screen.queryByText("Gerenciar Locatários");
        const btnGLivros = screen.queryByText("Gerenciar Livros");
        
        const buttons = [btnAluguel, btnGerenciador, btnGAutores, btnGLocatarios, btnGLivros]
        
        buttons.forEach(button => {
            expect(button).toBeVisible()
        })
    });

    test("Deve verificar o selecionador do botão", () => {
        render(<Sidebar item="autor"/>)
        const btnAutor = screen.queryByText("Gerenciar Autores")
        expect(btnAutor).toHaveStyle("backgroundColor: rgba(33, 147, 243, 0.1)")
    })
});