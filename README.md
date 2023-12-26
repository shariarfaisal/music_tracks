# Music Track Installation Guide

### Live Preview
Visit the [Live Preview](http://ec2-13-213-28-94.ap-southeast-1.compute.amazonaws.com:3000) of the Music Track application.

### Prerequisite
1. [NodeJS](https://nodejs.org/en/download)
2. [MongoDB](https://www.mongodb.com/try/download/community)

### Clone the repository 
```shell
git clone https://github.com/shariarfaisal/music_tracks.git
```

### Run Backend Server
```shell
# Enter into server project folder
cd music_tracks/server

# Follow the `example.env` file and
# Add .env file with necessary environment variables

# install dependencies
yarn

# Run the application
yarn start
```

### Run Frontend 
```shell
# Enter into the client project folder
cd music_tracks/client

# Follow the example.env file and
# Add .env file with environment variables

# install dependencies
yarn

# Run the application
yarn start
```


### Run the application in the docker 
**Before run the project, make sure you have installed docker on your local machine**

```shell
# Enter in the main project directory
cd music_tracks

# Make sure you added the .env file in the project both folder client and server
# Follow the example.env files and add accordingly

# IMPORTANT: Use the following databaseURI in the backend .env file for Docker deployment instead of the local URI.
# databaseURI=mongodb://mongodb:27017

# Run the entire application using Docker Compose
docker-compose up -d
```


### Run Backend in docker  
```shell
# Enter into the server project folder
cd music_tracks/server

# Follow the `example.env` file and
# Add .env file with necessary environment variables

# Build image
docker build -t music_tracks_backend .

# Run image
docker run -p 5000:5000 -d music_tracks_backend
```


# Run Frontend in docker 
```shell
# Enter into the client project folder
cd music_tracks/client

# Follow the example.env file and
# Add .env file with environment variables

# Build image
docker build -t music_tracks_client .

# Run image
docker run -p 3000:3000 -d music_tracks_client
```
