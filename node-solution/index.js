//index.js

const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  let param = {
    public : "../simple-webgl-build/"
  }
  return handler(request, response, param);
})

server.listen(3001, () => {
  console.log('Running at http://localhost:3001');
});