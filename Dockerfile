# ---- Build stage ----
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies first to leverage Docker layer caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the source and build the production bundle
COPY . .
RUN npm run build -- --configuration production

# ---- Runtime stage ----
FROM nginx:1.27-alpine

# SPA-aware nginx configuration (client-side routing fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# The legacy browser builder (ngx-build-plus:browser) outputs directly
# into dist/customer-app
COPY --from=build /app/dist/customer-app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
