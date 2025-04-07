FROM node:23-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx primsa generate

COPY . .

RUN npm run build

EXPOSE 4000:3001

CMD [ "npm", "run", "start:migrate:prod"]