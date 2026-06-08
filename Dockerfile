FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Build the frontend app so the server can serve static files
RUN npm run build || true

EXPOSE 3000

CMD ["node", "server.js"]
