FROM node:18.3.0-alpine3.14
WORKDIR /app

COPY package*.json ./
COPY .env ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]