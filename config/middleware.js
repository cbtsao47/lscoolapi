const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
module.exports = server => {
  server.use(express.json()); // built-in
  server.use(morgan("short")); // third-party, keep logs
  server.use(helmet()); // third-party, masks to provide security
  server.use(cors()); // third-party, cross orgin security
};
