"use strict";

const choose = require('funkster-core').choose;
const f = require('funkster-http');
const http = require('http');

const api =
  choose([
    f.GET(choose([
      f.ifPath("/", () => f.Ok("Hello World!")),
      f.parsePath("/:name", params => f.Ok("Hello from GET, " + params.name))
    ])),
    f.POST(f.ifPath("/", () => f.body(name => f.Ok("Hello from POST, " + String(name)))))
  ]);

const server = http.createServer(f.asRequestListener(api));
server.listen(8083, () => `Server started on port ${8083}.`);
