const express = require('express');
const users = require('../models/users.js')
const app = express.Router();
console.log('In controllers')

app
    .get('/', (req, res) => {
        const all = users.getAll();
        res.send(all);
    })//the search query is not have a use in my code right now
    .get('/search', (req, res) => {

        const search = req.query.q;
        const result = users.search(search);
        res.send(result);

    })
    .get('/:id', (req, res) => {
        const id = req.params.id;
        const user = users.get(id);
        res.send(user);
    })//////////////////////////////////////////
    .post('/', (req, res) => {
        const user = req.body;
        const result = users.add(user);
        res.send(result);
    })
    .patch('/:id', (req, res) => {
        const user = req.body;
        user.id = req.params.id;
        const result = users.update(user);
        res.send(result);
    })
    .delete('/:id', (req, res) => {
        const id = req.params.id;
        const result = users.remove(id);
        res.send(result);
    })

module.exports = app