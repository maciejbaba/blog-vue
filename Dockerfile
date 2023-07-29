FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app

COPY . .

# install project dependencies
RUN npm install

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "node", "src/main.ts" ]