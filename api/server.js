const express = require("express");
const accountRouter = require('./accounts/accounts-router')
const server = express();

server.use(express.json());

server.use('/api/accounts', accountRouter)

const handlesErrors = (err , req , res , next ) => {
  const errorStatus = err.status || 500
  res.status(errorStatus).json({
    message: err.message,
  })
  next()
}

server.use(handlesErrors)

module.exports = server;
