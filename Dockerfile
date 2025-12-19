# Use an official Node.js runtime as a parent image
FROM node:24-slim

# Set the working directory in the container
WORKDIR /app


#copy files
COPY package*.json ./
RUN npm install --production
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run the application
CMD ["node", "src/server.js"]