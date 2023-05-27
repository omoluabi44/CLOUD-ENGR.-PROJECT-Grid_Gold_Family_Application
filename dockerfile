# Use the official Node.js image as the base image
FROM node

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./
COPY . .

# Install dependencies
RUN npm install

# Copy the application code to the container


# Build the application


# Specify the container's port (default is 3000 for React applications)
EXPOSE 3000

# Define the startup command
CMD ["npm", "start"]
