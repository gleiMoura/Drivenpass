FROM node:14 as base

WORKDIR /usr/src/

COPY package*.json ./

EXPOSE 4000

COPY . .

RUN npm i

CMD ["npm", "run", "serve"]