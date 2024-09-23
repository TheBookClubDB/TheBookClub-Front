import { describe, expect, it, test } from 'vitest'
import App from './App'
import { render } from '@testing-library/react'

describe('Realiza teste da pagina app', ()=>{
    it('Valida se a pagina APP eta sendo renderizada', ()=>{
        render(<App/>);
    })


})