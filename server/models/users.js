/** @type { { users: User[] } } */
const data = require('../data/users.json');

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
        return user;
    }
    return null;
}

/**
 * @param {number} id
 * @returns {boolean}
 * */
function remove(id) {
    const index = data.users.findIndex(u => u.id == id);
    if (index >= 0) {
        data.users.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = {
    getAll, get, search, add, update, remove
}