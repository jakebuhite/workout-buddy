# syntax=docker/dockerfile:1

FROM node:18-alpine

# Create App Directory
WORKDIR /app

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 3000

CMD ["npm","start"]
