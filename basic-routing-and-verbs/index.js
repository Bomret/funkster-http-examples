"use strict";

const { choose } = require('funkster-core');
const { asRequestListener, GET, POST, ifPath, parsePath, body, Ok } = require('funkster-http');
const http = require('http');

const api =
  choose([
    GET(choose([
      ifPath("/", () => Ok("Hello World!")),
      parsePath("/:name", params => Ok("Hello from GET, " + params.name))
    ])),
    POST(ifPath("/", () => body(name => Ok("Hello from POST, " + String(name)))))
  ]);

const port = process.env.PORT || 8083;
const server = http.createServer(asRequestListener(api));
server.listen(port, () => `Server started on port ${port}.`);
