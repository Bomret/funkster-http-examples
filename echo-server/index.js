"use strict";

const { asRequestListener, body, Ok, POST } = require('funkster-http');
const http = require('http');

const api = POST(body(buffer => Ok(buffer)));

const port = process.env.PORT || 8083;
const server = http.createServer(asRequestListener(api));
server.listen(port, () => `Server started on port ${port}.`);
