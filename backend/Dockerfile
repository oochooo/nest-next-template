FROM node:lts
WORKDIR /app
#RUN yarn
COPY package.json yarn.lock ./
# RUN yarn --pure-lockfile --production=false
RUN yarn install --production=false
COPY . .