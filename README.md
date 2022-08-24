Expressjs sample app
===

This sample app shows how to serve your neodejs app from a secondary path rather than `/`

This is usefull when you want to serve multiple apps from the same domain name and you want to use custom paths to serve them

Example:
- mydomain.com/myfirstapp
- mydomain.com/mysecondapp

# Install the sample app
- Install NodeJS
- Clone this repo
- Run `npm install` at the root folder of this repo

# Run the sample app
- Run `APP_PATH=/myapp APP_PORT=5000 npm start` at the root folder of this repo

Edit `APP_PATH` and `APP_PORT` with your custom values

# Test the app
- Open your browser on `http://localhost:5000` it will display a homepage
- Now open if you open it on `http://localhost:5000/myapp` it will display the same content
- Try with another url like: `http://localhost:5000/api` and `http://localhost:5000/myapp/api`

# Serve multiple apps with the same url 
- Create app docker image
`docker build -t expressjs-sample-app:1.0 .`
- Create a docker network to link between apache and apps
`docker network crate foobar` 
- Launch app foo 
`docker run -d --network foobar --name foo -p 3000:3000 -e APP_PORT=3000 -e APP_PATH=/foo expressjs-sample-app:1.0`
- Launch app bar
`docker run -d --network foobar --name bar -p 5000:5000 -e APP_PORT=5000 -e APP_PATH=/bar expressjs-sample-app:1.0`
- Launch apache with the custom configuration on this repo `httpd.conf` (Adjust if if necessary to match your eventual changes)
`docker run -d --network foobar --name apache -p 8080:80 -v "$PWD/httpd.conf":/usr/local/apache2/conf/httpd.conf httpd:2.4`
- Run app foo on `http://localhost:8080/foo`
- Run app bar on `http://localhost:8080/bar`