# Use the official MongoDB image from Docker Hub
FROM mongo:latest

# Set the default database name
ENV MONGO_INITDB_DATABASE dungeon-scheduler

# Copy a JavaScript file to initialize the MongoDB collection
COPY init.js /docker-entrypoint-initdb.d/

# Expose MongoDB default port
EXPOSE 27017
