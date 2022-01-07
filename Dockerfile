FROM node:lts AS build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:lts-alpine AS publish
WORKDIR /app
EXPOSE 80
RUN apk add gcompat python3 make g++
RUN chown -R node:node /app
USER node
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/dist dist
ENTRYPOINT ["node", "dist/index.js"]