import { Alert, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Botao from '../botao/Botao';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'
import api from '../../lib/api';

const FormularioCadastroAutor = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState<string>('');
  const [dataNascimento, setDataDeNascimento] = useState<Dayjs | null>(dayjs(''));
  const [genero, setGenero] = useState<string>('OUTRO');
  const [erroNome, setErroNome] = useState<boolean>(false);
  const [erroData, setErroData] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string>('');
  const [alertSeverity, setAlertSeverity] = useState<'error' | 'success'>('error');
  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  const currentDate = dayjs();

  const botaoCancelar = async() => {
    navigate('/*')
  }

  const enviarFormulario = async() => {
    try {
      const dataDeNascimentoFormatada = dataNascimento?.format('YYYY-MM-DD')
      const payload = {
        nome: nome,
        nascimento: dataDeNascimentoFormatada,
        genero: genero,
      };

      await api.post('/autor/registro', payload);
      setMessageAlert('Registro realizado com sucesso!');
      setAlertSeverity('success');
      setOpenAlert(true);
      setTimeout( async() => {
        await navigate('/*');
      }, 2000)
      
    } catch (error) {
      let erroMensagem = 'Erro ao salvar.';
      
      if (axios.isAxiosError(error)) {
        const erroData = error.response?.data;
        if(typeof erroData === 'string'){
          erroMensagem = erroData;
        }else if(typeof erroData === 'object'){
          erroMensagem = erroData.error || erroData.message || erroMensagem;

        }
        setMessageAlert(erroMensagem);
        setAlertSeverity('error');
        setOpenAlert(true);
      } 
    }

    
  };

  const botaoSalvar = async(): Promise<void> => {
    const camposInvalido: boolean = validarCampos();

    if (camposInvalido) {
      setMessageAlert('Por favor, preencha todos os campos corretamente.');
      setAlertSeverity('error');
      setOpenAlert(true);
    } else {
      await enviarFormulario();
    }
  }

  const validarCampos = (): boolean => {
    let nomeInvalido: boolean = false;
    let dataInvalida: boolean = false;

    if (nome === '' || nome.length < 2) {
      setErroNome(true);
      nomeInvalido = true;
    }

    if (!dayjs(dataNascimento).isValid()) {
      setErroData(true);
      dataInvalida = true;
    }

    if (dataNascimento && dataNascimento > currentDate.subtract(18, 'year')) {
      setErroData(true);
      dataInvalida = true;
    }

    return nomeInvalido || dataInvalida;
  }

  const ALPHABET_REGEX = /^[^a-zA-Z]+$/;

  return (
    <>
      <Box aria-label='form' component="form" className={style.box}>

        <div className={style.divCampos}>
          <TextField className={style.nomeTexField}
            required
            aria-label='campo-para-digitar-o-nome'
            error={erroNome}
            helperText={erroNome ? 'Campo obrigatorio.' : ''}
            label="Nome"
            type='text'
            placeholder='Digite o nome da pessoa autora'
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
              if (ALPHABET_REGEX.test(event.key) && event.key !== " ") {
                event.preventDefault()
              }
            }}
            slotProps={{
              htmlInput: {
                maxLength: 70}
            }}
            onChange={(e) => {
              setErroNome(false)
              setNome(e.target.value)
            }}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className={style.dataFieldData}
              aria-label='campo-para-digitar-a-data'
              slotProps={{
                textField: {
                  helperText: 
                    erroData ? 'Campo obrigatorio.' : '', 
                    size: 'medium',
                    error: erroData
                }
              }}
              maxDate={currentDate}
              label="Data de nascimento"
              value={dataNascimento}
              format="DD-MM-YYYY"
              onChange={(newValue) => {
                setErroData(false)
                setDataDeNascimento(newValue)
              }}
            />
          </LocalizationProvider>
        </div>

        <FormControl>
          <FormLabel id="radio-botoes-rotulo">Gênero</FormLabel>
          <RadioGroup
            aria-labelledby="objeto-de-radio-botons"
            aria-label="objeto-de-radio-botons"
            defaultValue="OUTRO"
            name="radio-buttons-group"
            onChange={(e) => {
              setGenero(e.target.value)
            }}
          >
            <FormControlLabel
              aria-label='opcao-masculino'
              value="MASCULINO"
              control={<Radio />}
              label="Masculino"
            />

            <FormControlLabel
              aria-label='opcao-feminino'
              value="FEMININO"
              control={<Radio />}
              label="Feminino"
            />

            <FormControlLabel
              aria-label='opcao-outro'
              value="OUTRO"
              control={<Radio />}
              label="Outro"
            />

          </RadioGroup>
        </FormControl>

        <div className={style.divBotoes}>
          <Botao texto='Cancelar' onClick={botaoCancelar} variante='outlined' />
          <Botao texto='Salvar' onClick={botaoSalvar} variante='contained' />

        </div>
      </Box>
      {openAlert && (
        <Alert
          onClose={handleCloseAlert}
          severity={alertSeverity}
          sx={{
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
            paddingTop: '6px',
            paddingRight: '16px',
            paddingBottom: '6px',
            paddingLeft: '16px'
          }}>
          {messageAlert}
        </Alert>)}
    </>
  )
}
export default FormularioCadastroAutor