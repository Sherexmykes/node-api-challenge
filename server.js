const express = require('express');
const helmet = require("helmet");
const actionRouter = require('./data/helpers/actionRouter');
const projectRouter = require('./data/helpers/projectRouter');

const server = express();

server.use(helmet());
// middleware

server.use(express.json())

server.get("/", (req, res) => {
    res.send(`<h3>It's Working </h3>`);
  });
//Routers
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

module.exports = server;