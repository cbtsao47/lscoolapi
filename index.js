const server = require("./api/server");

// enable dynammic ports for hosting provider
const port = process.env.PORT || 5000;

server.listen(port, () => console.log("server on port 5k"));
