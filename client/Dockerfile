FROM node:18.3.0-alpine3.14 as build
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . .
RUN yarn build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine
# config to listen to port 3000
RUN rm -f /etc/nginx/conf.d/default.conf
COPY conf /etc/nginx/conf.d

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3000

