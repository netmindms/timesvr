FROM node:22-alpine3.21
WORKDIR /app
ENV NODE_ENV="production"
COPY main.js .
COPY package.json .
COPY package-lock.json .
RUN apk add nodejs npm --no-cache
RUN npm ci --production --omit=dev
CMD ["node", "main.ts" ]
