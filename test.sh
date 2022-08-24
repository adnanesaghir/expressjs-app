#!/bin/bash

echo "Warning!
This action will completely remove resources below:
- docker containers: foo, bar, apache
- docker network: foobar
Are you OK with that?
Hit Enter to continue or Ctrl+C to cancel"

read input

echo "Removing resources"
docker rm -f foo
docker rm -f bar
docker rm -f apache
docker network remove foobar

echo "Creating resources"
docker build -t expressjs-sample-app:1.0 .
docker network create --driver bridge foobar
docker run -d --network foobar --name foo -p 3000:3000 -e APP_PORT=3000 -e APP_PATH=/foo expressjs-sample-app:1.0
docker run -d --network foobar --name bar -p 5000:5000 -e APP_PORT=5000 -e APP_PATH=/bar expressjs-sample-app:1.0
docker run -d --network foobar --name apache -p 8080:80 -v "$PWD/httpd.conf":/usr/local/apache2/conf/httpd.conf httpd:2.4

echo "Testing"
echo -e "\nTest foo"
curl http://localhost:8080/foo
echo -e "\n\nTest bar"
curl http://localhost:8080/bar
echo -e "\n\nDone!\n"