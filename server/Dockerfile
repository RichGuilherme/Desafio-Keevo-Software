
FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma

RUN npm install

COPY . . 

RUN npx prisma generate

EXPOSE 5002

CMD [ "npm", "run", "dev" ]