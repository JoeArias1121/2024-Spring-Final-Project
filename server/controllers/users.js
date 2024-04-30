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
        users.getAll()
        .then(all => {
            /** @type { UserDataListEnvelope } */
            const response = {
                data: all,
                totalCount: all.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })//the search query is not have a use in my code right now
    .get('/search', (req, res, next) => {

        const search = req.query.q;
        if(typeof search !== 'string' ) throw new Error('search is required');
        users.search(search)
        .then(result => {
            /** @type { UserDataListEnvelope } */
            const response = {
                data: result,
                totalCount: result.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);

    })
    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        //const user = users.get(+id);
        //res.send(user);
        users.get(+id)
        .then(result => {
            /** @type { UserDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })//////////////////////////////////////////
    .post('/', (req, res, next) => {
        const user = req.body;
        console.log("1: about to add user")
        users.add(user)
        .then(result => {
            console.log("5: Returned from add user");
            /** @type { UserDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .patch('/:id', (req, res, next) => {
        const user = req.body;
        user.id = req.params.id;
        users.update(user)
        .then(result => {
            /** @type { UserDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .delete('/:id', (req, res, next) => {
        const id = req.params.id;
        users.remove(+id)
        .then(result => {
            /** @type { UserDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })

module.exports = app