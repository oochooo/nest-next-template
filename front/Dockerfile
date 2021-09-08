FROM node:lts-bullseye-slim
WORKDIR /app
COPY package.json yarn.lock ./
# RUN yarn --pure-lockfile --production=false
# #CMD ["yarn", "install", "--production=false"]
RUN yarn install --production=false
COPY . .