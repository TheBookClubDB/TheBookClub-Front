import { fireEvent, render, screen } from '@testing-library/react'
import FormularioDeCadastroDeAutor from '.'
import { describe, expect, test } from 'vitest'

describe('Teste de formulário',()=>{

    test('Deve renderizar o formulario.', ()=>{
        render(<FormularioDeCadastroDeAutor/>);
    //    logRoles(view.container)
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
        const campoDeEntradaDoNomeLabel = screen.getByLabelText('campo-para-digitar-o-nome');
        expect(campoDeEntradaDoNomeLabel).toBeInTheDocument();  
        expect(form).toContainElement(campoDeEntradaDoNomeLabel); 
       
        const campoDeEntradaDaDataDeNascimento = screen.getByRole('textbox',{name:'Data de nascimento'});
        expect(campoDeEntradaDaDataDeNascimento).toBeInTheDocument();
        expect(form).toContainElement(campoDeEntradaDaDataDeNascimento); 
         
        const campoDeEntradaDeCPF = screen.getByRole('textbox',{name:'CPF'});
        expect(campoDeEntradaDeCPF ).toBeInTheDocument();
        expect(form).toContainElement(campoDeEntradaDeCPF ); 

        const objetoDeRadioBotons = screen.getByRole('radiogroup',{name:'objeto-de-radio-botons'});
        expect(objetoDeRadioBotons ).toBeInTheDocument();
        expect(form).toContainElement(objetoDeRadioBotons ); 
  
    })

    
        // const opcaoMasculino = screen.getByLabelText('Masculino');
        // expect(opcaoMasculino ).toBeInTheDocument();
        // expect(form).toContainElement(opcaoMasculino); 

        // const opcaoFeminino = screen.getByRole('radio',{name:'opcao-feminino'});
        // expect(opcaoFeminino).toBeInTheDocument();
        // expect(form).toContainElement(opcaoFeminino);

        // const opcaoOutro = screen.getByRole('radio',{name:'opcao-outro'});
        //  expect(opcaoOutro).toBeInTheDocument();
        // expect(form).toContainElement(opcaoOutro);


    test('Verifica campo habilitado', ()=>{
        render(<FormularioDeCadastroDeAutor/>);
        const campoDeEntradaDoNome = screen.getByRole('textbox',{name:'Nome'});
        expect(campoDeEntradaDoNome).toBeInTheDocument(); 
        expect(campoDeEntradaDoNome).toHaveAttribute('type', 'text')
        fireEvent.change(campoDeEntradaDoNome, {target:{value:'testandoEntradaDoNome'}})
        expect(campoDeEntradaDoNome).not.toBeDisabled(); 
    })

    
    test('Verifica se o campo é do tipo texto', ()=>{
        render(<FormularioDeCadastroDeAutor/>);
        const campoDeEntradaDoNome = screen.getByRole('textbox',{name:'Nome'}) as HTMLInputElement;
        expect(campoDeEntradaDoNome).toBeInTheDocument(); 
        expect(campoDeEntradaDoNome).toHaveAttribute('type', 'text')
        fireEvent.change(campoDeEntradaDoNome, {target:{value:'testando entrada do nome'}})
        expect(campoDeEntradaDoNome.value).toBe('testando entrada do nome'); 
    })

})