const express = require('express');
const bodyParser = require('body-parser');

var server = express();

const data = require('./doc_manage/doc_api')

server.use(bodyParser.json({ limit: '5mb' })); // support json encoded bodies
server.use(bodyParser.urlencoded({ extended: true, limit: '5mb' })); // support encoded bodies

server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.set({ 'content-type': 'application/json; charset=utf-8' });
    
    // Pass to next layer of middleware
    next();
});

var port = process.env.PORT || 9999;
server.listen(port, "0.0.0.0", function () {
    console.log("Listening on Port " + port);
    console.log("http://localhost:" + port);
});

server.use("/api",data)