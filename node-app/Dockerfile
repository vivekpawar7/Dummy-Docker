# Get the base image
FROM node:8-alpine

WORKDIR /usr/app

#Install dependencies
COPY ./ ./
RUN npm install

CMD ["npm", "start"]