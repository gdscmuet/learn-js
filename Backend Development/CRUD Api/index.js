// To run this nodejs app, install all dependencies by typing 'npm install' in root directory i.e. CRUD Api
const express = require('express'); // Express is a javascript library for nodejs. It is used for backend development.

const server = express(); // Creating express server

server.listen(/* port */ 3000, /* callback */ () => {
    console.log('listening on port 3000... navigate to http://localhost:3000/');
});