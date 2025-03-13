# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy all other project files into the container
COPY . .

# Install dependencies, including missing Babel package
RUN npm install

# Expose port 3000 for the React app
EXPOSE 3000

# Run the React development server
CMD ["npm", "start"]
