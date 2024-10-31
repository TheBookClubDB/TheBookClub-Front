## The Book Club - Front

### [The Book Club](http://localhost:5173/) - O link está como provisório.

#### O projeto é exclusivamente para [DBServer](https://db.tec.br/).

---

### 📄 Descrição do projeto
O objetivo dos testes web é diminuir erros e bugs, melhorando a qualidade do site The Book Club.

---

### Ferramentas que foi utilizado?
#### Construido com a estrutura:
:pushpin: [GRADLE](https://gradle.org/install/),

:pushpin: [JAVA 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

#### Dependências:
:pushpin: [Junit 5](https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter/5.11.1),

:pushpin: [Junit api](https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-api/5.11.1),

:pushpin: [Junit params](https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-params/5.11.1),

:pushpin: [Selenium](https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java/4.25.0),

:pushpin: [Bonigarcia](https://mvnrepository.com/artifact/io.github.bonigarcia/webdrivermanager/5.9.2),

:pushpin: [ExtentRports](https://mvnrepository.com/artifact/com.aventstack/extentreports/5.1.2),

---
###  Pré-requisitos:

- **Node 20**: Confirme que você possui a versão 20 no Node na sua máquina. Ele pode ser encontrado [aqui](https://nodejs.org/en/blog/release/v20.9.0)

1. **Clone o repositório**

    ```bash
    git clone https://github.com/TheBookClubDB/TheBookClub-Front.git
    cd TheBookClub-Front
    ```
   
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
  Deixa aberto e vai abrir outro IDE.

3. **Execute o teste de automação da web**

- No mesmo repositório, basta entrar ou alterar para a branch 'test-api'

    ```bash
    git checkout test-web
    ./gradlew test
   ```

---
*Funciona na minha máquina* :coffee: :rocket: