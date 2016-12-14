import { asRequestListener, Ok } from "funkster-http";
import * as http from "http";

const api = Ok("Hello world!");

const port = process.env.PORT || 8083;
const server = http.createServer(asRequestListener(api));
server.listen(port, () => `Server started on port ${port}.`);
