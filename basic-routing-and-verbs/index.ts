import { choose } from "funkster-core";
import { GET, Ok, POST, asRequestListener, body, ifPath, parsePath } from "funkster-http";
import * as http from "http";

interface Greeting {
  name: string;
}

const api =
  choose([
    GET(choose([
      ifPath("/", () => Ok("Hello World!")),
      parsePath<Greeting>("/:name", params => Ok("Hello from GET, " + params.name))
    ])),
    POST(
      ifPath("/", () => body(name => Ok("Hello from POST, " + String(name))))
    )
  ]);

const server = http.createServer(asRequestListener(api));
server.listen(8083);
