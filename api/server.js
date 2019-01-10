const express = require("express");

const configureMiddleWare = require("../config/middleware");
const doubler = require("../common/doublerMiddleware");
const productsRouter = require("../products/productsRouter");
const clientsRouter = require("../clients/clientsRouter");
const server = express();

configureMiddleWare(server);
// routes

server.get("/products", productsRouter);
server.get("/clients", clientsRouter);
server.get("/orders", (req, res) => {
  res.send("GET /orders");
});

server.get("/", (req, res, next) => {
  res.send("sanity check success");
});
server.get("/double", doubler, (req, res) => {
  res.send(`the double is ${req.double} from the original ${req.query.number}`);
});
server.get("/:id", (req, res, next) => {
  res.send(`sanity check success, id: ${req.params.id}`);
});
module.exports = server;
