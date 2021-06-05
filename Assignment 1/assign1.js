const http = require('http');

const routes = require('./routes/routes');

const server = http.createServer(routes.handler);

server.listen(3001);