const fs = require('fs');

const fileName = __dirname + '/../data/users.json';

/** @type { { users: User[] } } */
let data //= require('../data/users.json');

fs.access(fileName, fs.constants.F_OK, (err) => {
    if (!err) {
        fs.readFile(fileName, 'utf8', (err, content) => {
            if (err) {
                console.error(err);
                return;
            }
            data = JSON.parse(content);
        });
    }
});

function save(callback) {
    fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error(err);
            if (callback) {
                callback(err);
            }
        }
        if (callback) {
            callback();
        }
    });
}

/**
 * @typedef {import('../../client/src/model/users').User} User
 * */

console.log('In models')

/**
 * @returns {User[]}
 * */
function getAll() {
    //return data.users;
    return data.users.map(x=> ({
        ...x, first: undefined, last: undefined, email: undefined,
    }))
}

/**
 * @param {number} id
 * @returns {User}
 * */

function get(id) {
    return data.users.find(user => user.id == id);
}

/**
 * @param {string} q
 * @returns {User[]}
 * */

function search(q) {
    return getAll().filter(user => 
        new RegExp(q, 'i').test(user.first) ||
        new RegExp(q, 'i').test(user.last) ||
        new RegExp(q, 'i').test(user.email) );
}


/**
 * @param {User} user
 * @returns {User}
 * */
function add(user) {
    user.id = data.users.length + 1;
    data.users.push(user);
    save();
    return user;
}//an issue where only the id
//is placed in the object and not the full user

/**
 * @param {User} user
 * @returns {User}
 * */
function update(user) {
    const index = data.users.findIndex(u => u.id == user.id);
    if (index >= 0) {
        data.users[index] = {
            ...data.users[index],
            ...user
        };// spread operator has the last value put in override the older property, essentially  updating it the older object here
        save();
        return user;
    }
    return null;
}

/**
 * @param {number} id
* @returns {User | null}
 * */
function remove(id) {
    const index = data.users.findIndex(u => u.id == id);
    if (index >= 0) {
        const deleted = data.users.splice(index, 1);
        save();
        return deleted[0];
    }
    return null;
}

module.exports = {
    getAll, get, search, add, update, remove
}