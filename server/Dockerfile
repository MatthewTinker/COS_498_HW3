FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY public ./public

EXPOSE 3000

CMD ["node", "server.js"]