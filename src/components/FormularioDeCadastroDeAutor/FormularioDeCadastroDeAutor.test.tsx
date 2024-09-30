import {logRoles, render, screen } from '@testing-library/react'
import FormularioDeCadastroDeAutor from '.'
import { describe, expect, it } from 'vitest'

describe('Teste de formulário',()=>{

    it('Deve renderizar o formulario.', ()=>{
       const view = render(<FormularioDeCadastroDeAutor/>);
       logRoles(view.container)

        const campoDeEntradaDoNome = screen.getAllByRole('textbox',{name:'campo-para-digitar-o-nome'});
        expect(campoDeEntradaDoNome).toBeVisible();      
    })



})