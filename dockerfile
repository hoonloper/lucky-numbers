FROM node:16.17.0

WORKDIR /lotto

COPY ./ .

RUN npm ci
RUN npm i -g @nestjs/cli@9.0.0
RUN npm run build

CMD ["npm", "run", "start:prod"]