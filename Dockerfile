##########################
# Stage 1: Install and build
##########################
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build

##########################  
# Stage 2: Serve app
##########################
FROM nginx:stable-alpine-slim
ENV PORT 80
RUN mkdir -p /app && chown -R nginx:0 /app && chmod -R 755 /app
COPY --from=builder /app/build /app
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]