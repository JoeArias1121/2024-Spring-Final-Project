const data = require('../data/users.json');

console.log('In models')

function getAll() {
    return data.users;
}

function get(id) {
    return data.users.find(user => user.id == id);
}

function search(q) {
    return data.users.filter(user => 
        new RegExp(q, 'i').test(user.first) ||
        new RegExp(q, 'i').test(user.last) ||
        new RegExp(q, 'i').test(user.email) );
}

module.exports = {
    getAll, get, search
}