const express = require('express');
const users = require('../models/users.js')
const app = express.Router();

/** 
 * @typedef {import('../../client/src/model/users').User} User 
 * @typedef {import('../../client/src/model/transportTypes').DataEnvelope<User> } UserDataEnvelope
 * @typedef {import('../../client/src/model/transportTypes').DataListEnvelope<User> } UserDataListEnvelope
 * */

console.log('In controllers')

app
    .get('/', (req, res, next) => {
        const all = users.getAll();
        //res.send(all);
        /** @type { UserDataListEnvelope } */
        const response = {
            data: all,
            totalCount: all.length,
            isSuccess: true,
        }
        res.send(response);
    })//the search query is not have a use in my code right now
    .get('/search', (req, res, next) => {

        const search = req.query.q;
        if(typeof search !== 'string' ) throw new Error('search is required');
        const result = users.search(search);
        //res.send(result);
        /** @type { UserDataListEnvelope } */
        const response = {
            data: result,
            totalCount: result.length,
            isSuccess: true,
        }
        res.send(response);

    })
    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        //const user = users.get(+id);
        //res.send(user);
        /** @type { UserDataEnvelope } */
        const response = {
            data: users.get(+id),
            isSuccess: true,
        }
        res.send(response);
    })//////////////////////////////////////////
    .post('/', (req, res, next) => {
        const user = req.body;
        const result = users.add(user);
        //res.send(result);
        /** @type { UserDataEnvelope } */
        const response = {
            data: result,
            isSuccess: true,
        }

        res.send(response);
    })
    .patch('/:id', (req, res, next) => {
        const user = req.body;
        user.id = req.params.id;
        const result = users.update(user);
        //res.send(result);
        /** @type { UserDataEnvelope } */
        const response = {
            data: result,
            isSuccess: true,
        }

        res.send(response);
    })
    .delete('/:id', (req, res, next) => {
        const id = req.params.id;
        const result = users.remove(+id);
        //res.send(result);
        /** @type { UserDataEnvelope } */
        const response = {
            data: result,// this needs to be checked
            isSuccess: true,
        }

        res.send(response);
    })

module.exports = app