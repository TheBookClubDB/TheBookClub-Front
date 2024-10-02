import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Botao from '../botao/Botao';

interface FormularioProps {
  handlerNome?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlerDataNascimento?: Date;
  handlerCpf?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlerGenero?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlerBotaoSalvar: () => void;
  handlerBotaoCancelar: () => void;
}

const FormularioDeCadastroDeAutor: React.FC<FormularioProps> = ({
  handlerNome,
  handlerCpf,
  handlerGenero,
  handlerBotaoSalvar,
  handlerBotaoCancelar
}) => {
  const [handlerDataNascimento, setDataDeNascimento] = useState<Dayjs | null>(dayjs(''));
  const [erroNome, setErroNome] = useState<boolean>(false);
  const [erroCpf, setErroCpf] = useState<boolean>(false);
  const [erroData, setErroData] = useState<boolean>(false);

  handlerBotaoSalvar = async(): Promise<void> => {
    validaCampoNome();
    validaCampoCpf();
    validaCampoData();
  }

  const validaCampoNome = () => {
    if (handlerNome == null) {
      setErroNome(true)
    } else {
      setErroNome(false)
    }
  }

  const validaCampoCpf = () => {
    if (handlerCpf == null) {
      setErroCpf(true)
    } else {
      setErroCpf(false)
    }
  }

  const validaCampoData = () => {
    if (!dayjs(handlerDataNascimento).isValid()) {
      setErroData(true)
    } else {
      setErroData(false)
    }
  }

  return (
    <Box aria-label='form' component="form" style={{ width: '466px', marginTop: '10px', textAlign: 'left' }}>

      <TextField style={{ width: '100%' }}
        required
        aria-label='campo-para-digitar-o-nome'
        error={erroNome}
        helperText={erroNome ? 'Campo obrigatorio.' : ''}
        label="Nome"
        type='text'
        placeholder='Digite  seu nome completo'
        onChange={handlerNome}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField style={{ margin: '10px 10px 10px 0px' }}
          required
          aria-label='campo-para-digitar-a-data'
          helperText={erroData ? 'Campo obrigatorio.' : ''}
          label="Data de nascimento"
          value={handlerDataNascimento}
          format="DD-MM-YYYY"
          onChange={(newValue) => setDataDeNascimento(newValue)}
          slotProps={{
            textField: {
              size: 'medium',
              error: erroData
            },
          }}
        />
      </LocalizationProvider>

      <TextField style={{ margin: '10px 0px 10px 0px' }}
        required
        aria-label='campo-para-digitar-o-cpf'
        error={erroCpf}
        helperText={erroCpf ? 'Campo obrigatorio.' : ''}
        label="CPF"
        type="text"
        placeholder="000.000.000-00"
        onChange={handlerCpf}
      />

      <FormControl>
        <FormLabel id="radio-botoes-rotulo">Gênero</FormLabel>
        <RadioGroup
          aria-labelledby="objeto-de-radio-botons"
          aria-label="objeto-de-radio-botons"
          defaultValue="outro"
          name="radio-buttons-group"
          onChange={handlerGenero}
        >
          <FormControlLabel
            aria-label='opcao-masculino'
            value="masculino"
            control={<Radio />}
            label="Masculino"
          />

          <FormControlLabel
            aria-label='opcao-feminino'
            value="feminino"
            control={<Radio />}
            label="Feminino"
          />

          <FormControlLabel
            aria-label='opcao-outro'
            value="outro"
            control={<Radio />}
            label="Outro"
          />

        </RadioGroup>
      </FormControl>
      <div>
        <Botao texto='Cancelar' onClick={handlerBotaoCancelar} variante='outlined' />
        <Botao texto='Salvar' onClick={handlerBotaoSalvar} variante='contained' />
      </div>
    </Box>
  )
}
export default FormularioDeCadastroDeAutor