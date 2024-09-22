FROM docker.io/nikolaik/python-nodejs:latest

WORKDIR /root/panitech_frontend

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3020

CMD ["npm", "run", "start"]

