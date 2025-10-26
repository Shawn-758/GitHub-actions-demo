FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 4. Copy the rest of the application code
COPY . .

# 5. Expose the port
EXPOSE 3000

# 6. Command to run the application
CMD ["npm", "start"]