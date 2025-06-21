FROM node:22-slim

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Create a data directory for the volume mount
RUN mkdir -p /app/data

# Set environment variables
ENV NODE_ENV=production
ENV AWS_REGION=us-east-1

# Expose port 3000
EXPOSE 3000

# Set the default character file
ENV CHARACTER_FILE=./characters/nova.character.json

# Run the application
CMD ["sh", "-c", "npm run start"] 