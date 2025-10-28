FROM node:22-alpine

WORKDIR /app

ARG PORT
ENV PORT={PORT}

COPY package.json .

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]