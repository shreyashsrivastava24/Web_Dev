//require ki sahayta se hum http module ko import kr rhe hai but ye commmonjs ki sahayta se module ko import krta hai
//const { createServer } = require('node:http');

//ES6 module ki sahayta se hum http module ko import kr rhe hai

import http from "http"

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //content type output determine krta on basis of how the browser interprets the data
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
