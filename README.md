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