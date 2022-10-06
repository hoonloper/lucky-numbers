FROM node:16.17.0

WORKDIR /lotto

COPY ./ .

COPY ./package.json /lotto
COPY ./package-lock.json /lotto
COPY ./tsconfig.json /lotto

RUN npm ci
RUN npm i -g @nestjs/cli@9.0.0

CMD ["npm", "run", "start:prod"]