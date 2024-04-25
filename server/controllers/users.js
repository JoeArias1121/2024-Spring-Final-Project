const express = require('express');
const app = express.Router();

app
    .get('/', (req, res) => {
        res.send( [
            {name: "Joseph", age: 21},
            {name: "Le", age: 28},
        ] )
    })
    .get('/test', (req, res) => {
        res.send({
            name: "Test User",
            age: 513
        })
    })

module.exports = app