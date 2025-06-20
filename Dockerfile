# ---------- Stage 1: Build ----------
FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# ---------- Stage 2: Serve ----------
FROM nginx:alpine

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Remove default Nginx config and replace with custom one
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]