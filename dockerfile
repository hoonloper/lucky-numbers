FROM node:16.17.0

WORKDIR /lucky-numbers

COPY ./ .

COPY ./package.json /lucky-numbers
COPY ./package-lock.json /lucky-numbers
COPY ./tsconfig.json /lucky-numbers

RUN npm ci
RUN npm i -g @nestjs/cli@9.0.0

CMD ["npm", "run", "start:prod"]