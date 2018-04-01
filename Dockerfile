FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

EXPOSE 3000

CMD ["cd", "frontend/"]

CMD ["npm", "install"]

CMD ["npm", "run", "build"]

CMD ["cd", ".."]

CMD ["export", "NODE_ENV=PROD"]

CMD ["npm", "run", "start"]
