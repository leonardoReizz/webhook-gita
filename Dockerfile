FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]
