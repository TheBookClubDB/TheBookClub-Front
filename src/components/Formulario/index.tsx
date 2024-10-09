import { Alert, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Botao from '../botao/Botao';
import axios from 'axios';
import styles from "./style.module.css";



const Formulario = () => {

  const [nome, setNome] = useState<string>('');
  const [dataNascimento, setDataDeNascimento] = useState<Dayjs | null>(dayjs(''));
  const [genero, setGenero] = useState<string>('Outros');
  const [erroNome, setErroNome] = useState<boolean>(false);
  const [erroData, setErroData] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string>('');
  const [alertSeverity, setAlertSeverity] = useState<'error' | 'success'>('error');

  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  const handlerBotaoSalvar = async (): Promise<void> => {
    validaCampoNome();
    validaCampoData();
    console.log('nome = ' + nome)
    console.log('Nascimento = ' + dataNascimento?.format("DD-MM-YYYY"))
    console.log('genero = ' + genero)
  }

  const botaoEnviar = async () => {// modal de confirmação ver com o guilherme
    try {
      const dataDeNascimentoFormatada = dataNascimento?.format("DD-MM-YYYY")
      const payload = {
        nome: nome,

        nascimento: dataDeNascimentoFormatada,
        genero: genero,
      };
      await axios.post("http://localhost:8081/autor/registro", payload);
      // navigate("/");
    } catch (error) {
      let erroMensagem = "Erro ao salvar.";
      if (axios.isAxiosError(error)) {
        erroMensagem = error.response?.data || erroMensagem;
        setMessageAlert(erroMensagem);
        setAlertSeverity("error");
      } setOpenAlert(true);
    }
  };

  const validaCampoNome = () => {
    if (nome == '') {
      setErroNome(true)
    } else {
      setErroNome(false)
    }
  }

  const validaCampoData = () => {
    if (!dayjs(dataNascimento).isValid()) {
      setErroData(true)
    } else {
      setErroData(false)
    }
  }

  return (
    <>
      <Box aria-label='form' component="form" style={{ width: '466px', marginTop: '10px', textAlign: 'left' }}>

        <div style={{display:'flex', gap:'6px', marginTop:'24px', marginBottom:'16px'}}>
            <TextField style={{ width: '362px', height:'57px' }}
              required
              aria-label='campo-para-digitar-o-nome'
              error={erroNome}
              helperText={erroNome ? 'Campo obrigatorio.' : ''}
              label="Nome"
              type='text'
              placeholder='Digite  seu nome completo'
              onChange={(e) => {
                setNome(e.target.value)
              }}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField style={{width:'179', height:'57px'  }}
                required
                aria-label='campo-para-digitar-a-data'
                helperText={erroData ? 'Campo obrigatorio.' : ''}
                label="Data de nascimento"
                value={dataNascimento}
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
        </div>

        <FormControl>
          <FormLabel id="radio-botoes-rotulo">Gênero</FormLabel>
          <RadioGroup
            aria-labelledby="objeto-de-radio-botons"
            aria-label="objeto-de-radio-botons"
            defaultValue="outros"
            name="radio-buttons-group"
            onChange={(e) => {
              setGenero(e.target.value)
            }}
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

        <div style={{display:'flex',width:'415px', height:'50px', gap:'8px', marginBottom:'50px', marginTop:'16px'}}>
          
            <Botao texto='Cancelar' onClick={() => { }} variante='outlined' />
            <Botao texto='Salvar' onClick={handlerBotaoSalvar} variante='contained' />
           
        </div>
      </Box>
      {openAlert && (
        <Alert
          onClose={handleCloseAlert}
          severity={alertSeverity}
          sx={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}>
          {messageAlert}
        </Alert>)}
    </>
  )
}
export default Formulario