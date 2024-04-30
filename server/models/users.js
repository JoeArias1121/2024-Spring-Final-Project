const fs = require('fs');

const fileName = __dirname + '/../data/users.json';

/** @type { { users: User[] } } */
let data //= require('../data/users.json');

function isFileAccessible(fileName) {
    return new Promise((resolve, reject) => {
        fs.access(fileName, fs.constants.F_OK, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, content) => {
            if (err) {
                reject(err);
                return;
            }
           resolve(content);
        });
});
}

function writeFile(fileName, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, content, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

isFileAccessible(fileName)
    .then(() => readFile(fileName))
    .then(content => {
        data = JSON.parse(content);
    })
    .catch(err => {
        console.error(err);
    });

function save() {
    return writeFile(fileName, JSON.stringify( data , null, 2) );
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
    save().catch(console.error);
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
        save().catch(console.error);
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
        save().catch(console.error);
        return deleted[0];
    }
    return null;
}

module.exports = {
    getAll, get, search, add, update, remove
}