FROM node:16.17.0

WORKDIR /home/app

COPY ./ .

COPY ./package.json /home/app
COPY ./package-lock.json /home/app
COPY ./tsconfig.json /home/app

RUN npm ci
RUN npm i -g @nestjs/cli@9.0.0

CMD ["npm", "run", "start:prod"]