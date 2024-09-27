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
        <Box component="form" style={{width:'466px', marginTop:'10px', textAlign:'left'}}>
            
                <TextField style={{width:'100%'}}
                    required     
                    error={erroNome}
                    helperText={erroNome?"Campo obrigatorio.":""}               
                    label="Nome"
                    type="text"
                    placeholder='Digite  seu nome completo'      
                    onChange={handlerNome}
                />
                  
          
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField style={{margin:'10px 10px 10px 0px'}}
                        required
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
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="outro"
                        name="radio-buttons-group"
                        onChange={handlerGenero}
                    >
                        <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                        <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
                        <FormControlLabel value="outro" control={<Radio />} label="Outro" />
                    </RadioGroup>
                    </FormControl>
                    <Button onClick={handleBotao}>teste</Button>
        </Box>
    )
}