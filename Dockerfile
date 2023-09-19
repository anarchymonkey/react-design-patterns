#From Image
FROM node:16-alpine

#WORKDIR is react design patterns
WORKDIR /react-design-patterns

#COPY INSTALLATION FILES
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

#Expose port so that it is accessable
EXPOSE 1234

CMD [ "npm", "start" ]