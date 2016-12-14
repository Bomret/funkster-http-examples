"use strict";

const { asRequestListener, Ok } = require('funkster-http');
const http = require('http');

const api = Ok("Hello world!");

const port = process.env.PORT || 8083;
const server = http.createServer(asRequestListener(api));
server.listen(port, () => `Server started on port ${port}.`);
