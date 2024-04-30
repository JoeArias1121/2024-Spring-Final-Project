const fs = require('fs/promises');

const fileName = __dirname + '/../data/users.json';

/** @type { Promise< { users: User[] } > } */
const dataP = fs
        .access(fileName, fs.constants.F_OK)
        .then(() => fs.readFile(fileName, 'utf8'))
        .then(content => JSON.parse(content))


async function save() {
    const data = await dataP
    return fs.writeFile(fileName, JSON.stringify( data , null, 2) );
}

/**
 * @typedef {import('../../client/src/model/users').User} User
 * */

console.log('In models')

/**
 * @returns {Promise<User[]>}
 * */
async function getAll() {
    const data = await dataP
    return data.users.map(x=> ({
        ...x, first: undefined, last: undefined, email: undefined,
    }))
}

/**
 * @param {number} id
 * @returns {Promise<User>}
 * */

async function get(id) {
    const data = await dataP;
    return data.users.find(user => user.id == id);
}

/**
 * @param {string} q
 * @returns {Promise<User[]>}
 * */

async function search(q) {
    return (await getAll()).filter(user => 
        new RegExp(q, 'i').test(user.first) ||
        new RegExp(q, 'i').test(user.last) ||
        new RegExp(q, 'i').test(user.email) );
}


/**
 * @param {User} user
 * @returns {Promise<User>}
 * */
async function add(user) {
    const data = await dataP;
    user.id = data.users.length + 1;
    data.users.push(user);
    console.log("2: About to save");
    
    await save()
    console.log("3: Saved");

    console.log("4: About to return user");
    return user;
}//an issue where only the id
//is placed in the object and not the full user

/**
 * @param {User} user
 * @returns {Promise<User>}
 * */
async function update(user) {
    const data  = await dataP;
    const index = data.users.findIndex(u => u.id == user.id);
    if (index >= 0) {
        data.users[index] = {
            ...data.users[index],
            ...user
        };// spread operator has the last value put in override the older property, essentially  updating it the older object here
        await save()
        return user;
    }
    return null;
}

/**
 * @param {number} id
* @returns {Promise<User | null>}
 * */
async function remove(id) {
    const data =  await dataP;
    const index = data.users.findIndex(u => u.id == id);
    if (index >= 0) {
        const deleted = data.users.splice(index, 1);
        await save().catch(console.error);
        return deleted[0];
    }
    return null;
}

module.exports = {
    getAll, get, search, add, update, remove
}