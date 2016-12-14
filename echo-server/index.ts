import { asRequestListener, body, Ok, POST } from "funkster-http";
import * as http from "http";

const api = POST(body(buffer => Ok(buffer)));

const port = process.env.PORT || 8083;
const server = http.createServer(asRequestListener(api));
server.listen(port, () => `Server started on port ${port}.`);
