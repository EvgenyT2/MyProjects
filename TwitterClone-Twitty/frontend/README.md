# Twitter clone - Twitty

Purpose of this project is to practise building multifunctional app by using React.js and Node.js.
In current state of project only front-end part is implemented.

## Technologies used 

 - React
 - TypeScript
 - React Router
 - Redux / Redux Saga
 - Axios
 - Material UI

While back-end of this project is not implemented, there is json-server in use as mock of database for testing application's functionality.

You can find list of used modules in "package.json" file.

## Currently implemented

 - SignIn page
 - Main page
 - Routing between pages
 - Multiply components:
     - Re-usable modal block
     - Form for adding tweets
     - "Return" - button
     - Search field
     - Side menu 
     - Openable tweets
     - Openable tags
 - Asynchronous events for fetching and setting data
 - HTTP requests
 - Visual effects (color changing, circular progress)
 - Error handling

## Run project

You have to clone this repository locally.

### React application

Install all required modules by running following command in projects "frontend" directory:

```
npm install
```


Run React application by executing following command in projects "frontend" directory:

```
npm start
```

### Json-server

You also have to run json-server by executing following command in projects "frontend" directory:

```
npx json-server --watch public/db.json --port 3001
```

### Application opening

The application should open automatically in your default browser, otherwise open [http://localhost:3000](http://localhost:3000) in your browser.

## NOTE:

Project is created for educational purposes, there are some similar parts of it implemented in diffirent ways, just for trying.