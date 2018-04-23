FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

EXPOSE 3000

# Build Frontend
CMD ["cd", "frontend/"]

CMD ["npm", "install"]

CMD ["npm", "run", "build"]

CMD ["cd", ".."]

# ENV NODE_ENV=TEST

CMD ["export", "NODE_ENV=TEST"]

# Run App
CMD ["npm", "run", "start"]
