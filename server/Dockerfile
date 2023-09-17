# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /mashup

# Copy package.json and package-lock.json to the container
COPY ./server/package*.json ./

# Install server dependencies
RUN npm install

# Copy the server files to the container
COPY ./server/ ./

# Expose port for the server (adjust as needed)
EXPOSE 5000

# Start the Node.js server
CMD ["npm", "start"]