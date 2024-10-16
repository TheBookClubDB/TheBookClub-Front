import {render, screen } from '@testing-library/react'
import FormularioDeCadastroDeAutor from '.'
import { beforeEach, describe, expect, test } from 'vitest'
import { MemoryRouter } from 'react-router-dom';

describe('Teste de formulário',()=>{
  let form: HTMLElement;
  let campoDeEntradaDoNome: HTMLLabelElement;
  let campoDeEntradaDaDataDeNascimento: HTMLInputElement;
  let objetoDeRadioBotons: HTMLElement;
  let radioMasculino: HTMLInputElement;
  let radioFeminino: HTMLInputElement;
  let radioOutro: HTMLInputElement;
    
  beforeEach(()=> {
    render(
      <MemoryRouter>
        <FormularioDeCadastroDeAutor/>
      </MemoryRouter>
    );
    form = screen.getByRole('form');
    campoDeEntradaDoNome = screen.getByLabelText('campo-para-digitar-o-nome');
    campoDeEntradaDaDataDeNascimento = screen.getByRole('textbox',{name:'Data de nascimento'});
    objetoDeRadioBotons = screen.getByRole('radiogroup',{name:'objeto-de-radio-botons'});
    radioMasculino = screen.getByLabelText('opcao-masculino')
    radioFeminino = screen.getByLabelText('opcao-feminino')
    radioOutro = screen.getByLabelText('opcao-outro')
  })

  test('Deve renderizar o formulario.', ()=>{
    expect(form).toBeInTheDocument();
    expect(campoDeEntradaDoNome).toBeVisible();          
    expect(campoDeEntradaDaDataDeNascimento).toBeInTheDocument();
    expect(campoDeEntradaDaDataDeNascimento).toBeVisible(); 
    expect(objetoDeRadioBotons).toBeVisible();
    expect(radioMasculino).toBeVisible();
    expect(radioFeminino).toBeVisible();
    expect(radioOutro).toBeVisible();
  })

  test('Deve validar elementos no formulários ',()=>{
    expect(form).toContainElement(campoDeEntradaDoNome); 
    expect(form).toContainElement(campoDeEntradaDaDataDeNascimento); 
    expect(form).toContainElement(objetoDeRadioBotons ); 
    expect(form).toContainElement(radioMasculino); 
    expect(form).toContainElement(radioFeminino); 
    expect(form).toContainElement(radioOutro); 
  })
  test('Verifica campo habilitado', ()=>{
    expect(campoDeEntradaDoNome).not.toBeDisabled(); 
    expect(campoDeEntradaDaDataDeNascimento).not.toBeDisabled();
    expect(campoDeEntradaDaDataDeNascimento).not.toBeDisabled();
    expect(objetoDeRadioBotons).not.toBeDisabled();
    expect(radioMasculino).not.toBeDisabled();
    expect(radioFeminino).not.toBeDisabled();
    expect(radioOutro).not.toBeDisabled();
  })
})