const express = require('express');

const server = express();

const authRouter = require('./router/auth-router.js');

const helmet = require("helmet");


server.use(helmet());



server.use(express.json());
server.use('/api/users', authRouter);
//line 15 is starting point for site to use in postman

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some functioning stuff for this last week of backend!</h2>`);
  });

module.exports = server;