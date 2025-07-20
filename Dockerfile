#Angular Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install  --frozen-lockfile

COPY . .

ARG API_URL
RUN sed "s|__API_URL__|$API_URL|g" src/assets/config.template.json > src/assets/config.json

RUN npm run build -- --configuration production

# Nginx Stage
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/hotel-princing-frontend-angular/browser/ /usr/share/nginx/html/

COPY --from=builder /app/src/assets/config.json /usr/share/nginx/html/assets/config.json


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]