FROM node:22
WORKDIR /pop

COPY package.json .
RUN npm install 
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]