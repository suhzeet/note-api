# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all project files
COPY . .

# If you have a frontend React app, build it
# Uncomment if needed:
# WORKDIR /app/client
# RUN npm install
# RUN npm run build
# WORKDIR /app

# Expose port
EXPOSE 5001

# Run the server
CMD ["node", "server/index.js"]
