# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the application
RUN npm run build

# Expose port 3000 for the web server
EXPOSE 3000

# Start the web server
CMD [ "npm", "run", "dev" ]
