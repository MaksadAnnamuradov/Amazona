FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ../frontend ./
RUN npm i
CMD ["npm", "start"]