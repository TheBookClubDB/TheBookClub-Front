import { Alert, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Botao from '../botao/Botao';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Formulario = () => {
  const navigate = useNavigate();
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

  const botaoCancelar = async() => {
    navigate('/')
  }
  const enviarFormulario = async() => {
    try {
      const dataDeNascimentoFormatada = dataNascimento?.format('DD-MM-YYYY')
      const payload = {
        nome: nome,
        nascimento: dataDeNascimentoFormatada,
        genero: genero,
      };
      await axios.post('http://localhost:8081/autor/registro', payload);
      setMessageAlert('Registro realizado com sucesso!');
      setAlertSeverity('success');
      navigate('/');
    } catch (error) {
      let erroMensagem = 'Erro ao salvar.';
      if (axios.isAxiosError(error)) {
        erroMensagem = error.response?.data || erroMensagem;
        setMessageAlert(erroMensagem);
        setAlertSeverity('error');
      }
    }

    setOpenAlert(true);
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

    if (nome === '') {
      setErroNome(true);
      nomeInvalido = true;
    }

    if (!dayjs(dataNascimento).isValid()) {
      setErroData(true);
      dataInvalida = true;
    }

    return nomeInvalido || dataInvalida;

  }

  return (
    <>
      <Box aria-label='form' component="form" style={{ width: '466px', marginTop: '10px', textAlign: 'left' }}>

        <div style={{ display: 'flex', gap: '6px', marginTop: '24px', marginBottom: '16px' }}>
          <TextField style={{ width: '362px', height: '57px' }}
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
            <DateField style={{ width: '179', height: '57px' }}
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
            defaultValue="outro"
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

        <div style={{ display: 'flex', width: '415px', height: '50px', gap: '8px', marginBottom: '50px', marginTop: '16px' }}>

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
export default Formulario