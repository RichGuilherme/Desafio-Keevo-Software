FROM node:latest

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json .

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do frontend
COPY . .

# Exponha a porta 3000 (ou a porta que o Vite está configurado para usar)
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento do Vite
CMD ["npm", "run", "dev"]