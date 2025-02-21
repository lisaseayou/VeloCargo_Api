FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3030
CMD [ "node", "index.js" ]