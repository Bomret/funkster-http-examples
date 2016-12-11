import { Ok, POST, asRequestListener, body } from "funkster-http";
import * as http from "http";

const api = POST(body(buffer => Ok(String(buffer))));

const server = http.createServer(asRequestListener(api));
server.listen(8083, () => "Server started.");
