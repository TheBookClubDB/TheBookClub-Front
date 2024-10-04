import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect, vitest } from 'vitest';
import Botao from '.';

describe('Componente do Botao', () => {
  test('Esperado que renderize o Botao com o texto correto', () => {
    const texto = 'Cancelar';
    render(<Botao texto={texto} onClick={() => {}} />);
  });

  test('Esperado que a funcao do botao seja acionada ao ser clicado', () => {
    const onClickMock = vitest.fn();
    const texto = 'Cancelar';
    render(<Botao texto={texto} onClick={onClickMock} />);

    fireEvent.click(screen.getByText(texto));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
