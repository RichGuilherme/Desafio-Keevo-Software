## Informações sobre o projeto

### Sobre
<p>O projeto é uma lista de tarefas com front-end e back-end, simples para criação, edição e delete das tarefas.</p>

<p>Link para o design feito no figma: </p>

[:link: FIGMA ](https://www.figma.com/file/2guZ8dbJ174BENb4Oxbiog/Untitled?type=design&node-id=3%3A4&mode=design&t=6hOB4BzH8pEHbff5-1)

<p>Link para modelagem de dados do prisma: </p>

[:link: PRISMA.IO ](https://prismaliser.app?code=Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgdGFzayB7CiAgaWQgICAgICAgICBJbnQgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkZXNjcmlwdGlvbiBTdHJpbmcKICBzdGF0dXMgICAgIFRhc2tTdGF0dXMgICBAZGVmYXVsdCh2YWx1ZTogdG9kbykKICBwcmlvcml0eSAgIFRhc2tQcmlvcml0eSBAZGVmYXVsdCh2YWx1ZTogbG93KQogIGR1ZURhdGUgICAgU3RyaW5nCiAgY3JlYXRlZEF0ICBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICBEYXRlVGltZSAgICAgQHVwZGF0ZWRBdAoKICBAQG1hcCgidGFza3MiKQp9CgplbnVtIFRhc2tTdGF0dXMgewogIHRvZG8KICBpbl9wcm9ncmVzcwogIGRvbmUKfQoKZW51bSBUYXNrUHJpb3JpdHkgewogIGxvdwogIG1lZGl1bQogIGhpZ2gKfQo%3D) 

### Tecnológias
<p> Essa foram as tecnológias escolhidas para o projeto </p>

- **TypeScript**
- **Reactjs**
- **NodeJs** 
- **Postgres**
- **Prisma**
- **Docker**

### Como Executar o projeto
<p> - Primeiro pré-requisitor é ter o nodeJs instalado na máquina. Você pode baixar através desse link: https://nodejs.org/en/download.</p>
<p> - Segundo passor é ter um gerenciador de pacotes para nodeJs. Os dois podem ser baixados atrevés desses links: https://docs.npmjs.com/cli/v6/commands/npm-install ou https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable  </p>

1. Clona o repositório:
   ```sh
   git clone https://github.com/RichGuilherme/Desafio-Keevo-Software.git
   ```
2. Instalar as dependências nas pastas client e server:
    ```sh
   npm install 
   ```
4. Na pasta server inicio o docker:
   ```sh
   docker compose up -d
   ```
5. Iniciar o servidor na pasta client:
   ```sh
   npm run dev
   ```
