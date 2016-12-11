"use strict";

const f = require('funkster-http');
const http = require('http');

const api = f.POST(f.body(buffer => f.Ok(String(buffer))));

const server = http.createServer(f.asRequestListener(api));
server.listen(8083, () => `Server started.`);
