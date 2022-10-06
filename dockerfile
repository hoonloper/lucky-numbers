FROM node:16.17.0

WORKDIR /

COPY ./ .

RUN npm ci
RUN npm i -g @nestjs/cli@9.0.0

CMD ["npm", "run", "start:prod"]