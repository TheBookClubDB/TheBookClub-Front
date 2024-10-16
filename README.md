# TheBookClub-Front

Este projeto tem como objetivo administrar o aluguel de livros por meio de uma aplicação web. Permitindo o cadastro de locatários, autores e livros e o gerenciamento do aluguel dos mesmos.

## Tabela de Conteúdo

- 📜[Pré Requisitos](#pré-requisitos)
- ⚙️[Configurações do Ambiente](#configuração-do-ambiente)
- 👟[Executando Projeto](#executando-o-projeto)
- 🧪[Rodando os Testes](#rodando-os-testes)
- 🔠[Verificando Formatação](#verificando-formatação)
- 🎨[Design do Projeto](#design-do-projeto)

## Pré-Requisitos

Para rodar este repositório você vai precisar:

- **Node 20**: Confirme que você possui a versão 20 no Node na sua máquina. Ele pode ser encontrado [aqui](https://nodejs.org/en/blog/release/v20.9.0)

Naturalmente para realizar as operações, será necessário rodar o BackEnd que pode ser encontrado [aqui](https://github.com/TheBookClubDB/TheBookClub-Back/tree/de)

## Configuração do Ambiente

1. **Clone o repositório**

    ```bash
    git clone https://github.com/TheBookClubDB/TheBookClub-Front.git
    cd TheBookClub-Front
    ```

## Executando o Projeto

1. **Instalando Dependências**

- Vá até a pasta do projeto e digite o comando

    ```bash
    npm install
    ```

2. **Executando o Projeto**

- Após instalar as dependências, iremos inicializar o projeto com o comando

    ```bash
    npm run dev
    ```

## Rodando os Testes

- Os testes dos componentes foram realizados utilizando o [vitest](https://vitest.dev/), eles podem ser rodados utilizando o seguinte comando

    ```bash
    npm run test
    ```

## Verificando Formatação

- Durante o desenvolvimento utilizamos o ESLint para padronizar e utilizar boas práticas no projeto. Podemos verificar o código a qualquer momento utilizando o comando

    ```bash
    npm run lint
    ```
## Design do Projeto

O design do projeto foi feito no Figma. O mesmo pode ser acessado [aqui](https://www.figma.com/design/RD2i1gUXdTPEum99iy2Bku/Vers%C3%A3o-atualizada-%7C-Projeto-Biblioteca-online).
