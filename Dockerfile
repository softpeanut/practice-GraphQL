## docker
#FROM node:16.13.1 AS builder
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npx tsc
#
#FROM node:16.13.1-alpine
#WORKDIR /app
#COPY --from=builder /app ./
#CMD ["npm", "run", "start:prod"]

# docker swarm
FROM node:16.13.1-alpine
COPY ./dist /dist
COPY ./node_modules /node_modules
CMD [ "node", "dist/main" ]