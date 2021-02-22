FROM node:15

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 80

CMD ["node", "app.js"]