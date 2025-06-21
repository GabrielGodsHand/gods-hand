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
ENV SUPABASE_URL=https://gzigpkrzuonxgeeolnpu.supabase.co
ENV SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6aWdwa3J6dW9ueGdlZW9sbnB1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTkzMDU2OSwiZXhwIjoyMDY1NTA2NTY5fQ.HEXJM4qlHERgHMGaTSFZtNcU_8JBxq9dVeHDkdiD8Z0

# Expose port 3000
EXPOSE 3000

# Set the default character file
ENV CHARACTER_FILE=./characters/nova.character.json

# Run the application
CMD ["sh", "-c", "pnpm start --character=${CHARACTER_FILE}"] 