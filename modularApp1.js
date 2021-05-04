// app.js
const express = require('express');
const greetMiddleware = require('./greet1.js');

express()
    .use('/api/v1/', greetMiddleware({ greeting:'Hello world' }))
    .listen(8080);