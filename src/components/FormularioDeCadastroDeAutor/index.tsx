import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export default function FormularioDeCadastroDeAutor(){
   
    const [nome, setNome] = useState<string>('');
    const [dataDeNascimento, setDataDeNascimento] = useState<Dayjs | null>(dayjs(''));
    const [cpf, setCpf] = useState<string>('');
    const [genero, setGenero] = useState<string>('Outro');
    const [erroNome, setErroNome] = useState<boolean>(false);
    const [erroCpf, setErroCpf] = useState<boolean>(false);
    const [erroData, setErroData] = useState<boolean>(false);

    const handlerNome = (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const valor = evento.target.value;
        setNome(valor);  
    }

    const handlerCpf = (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const valor = evento.target.value;
        setCpf(valor);
    }

    const handlerGenero = (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const valor = evento.target.value;
        setGenero(valor);
        
    }

    const handleBotao = async (): Promise<void> => {
        // console.log('o nome é '+nome);
        // console.log('data de nacimento é '+dataDeNascimento?.format('DD-MM-YYYY'));
        // console.log('o cpf é '+cpf);
        // console.log('o genero é '+genero);
        validaCampoNome()
        validaCampoCpf()
        validaCampoData()
      
        
    }

    const validaCampoNome = ()=>{
        if(nome == ""){
            setErroNome(true)
        }else{
            setErroNome(false)
        } 
        
    }

    const validaCampoCpf = ()=>{
        if(cpf == ""){
            setErroCpf(true)
        }else{
            setErroCpf(false)
        } 
        
    }

    const validaCampoData = ()=>{
        if(!dayjs(dataDeNascimento).isValid()){
            setErroData(true)
        }else{
            setErroData(false)
        } 
    }

    return(
        <Box aria-label='form' component="form" style={{width:'466px', marginTop:'10px', textAlign:'left'}}>
            
                <TextField style={{width:'100%'}}
                    required   
                    aria-label='campo-para-digitar-o-nome'  
                    error={erroNome}
                    helperText={erroNome?"Campo obrigatorio.":""}               
                    label="Nome"
                    type='text'
                    placeholder='Digite  seu nome completo'      
                    onChange={handlerNome}
                />
                  
          
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField style={{margin:'10px 10px 10px 0px'}}
                        required
                        aria-label='campo-para-digitar-a-data'
                        helperText={erroData?"Campo obrigatorio.":""} 
                        label="Data de nascimento"
                        value={dataDeNascimento}
                        format="DD-MM-YYYY"
                        onChange={(newValue) => setDataDeNascimento(newValue)}
                        slotProps={{textField: {
                            size: "medium",
                            error: erroData
                          },
                        }}
                    />
                </LocalizationProvider>

                <TextField style={{margin:'10px 0px 10px 0px'}}
                    required
                    aria-label='campo-para-digitar-o-cpf'
                    error={erroCpf}
                    helperText={erroCpf?"Campo obrigatorio.":""}     
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
        </Box>
    )
}