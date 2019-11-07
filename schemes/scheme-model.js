const db = require('../data/dbConfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findSteps,
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first()
}

function add(post) {
    return db
        .insert(post)
        .into('schemes')
        .then(id => {
            return findById(id[0])
        })
}

function update(post, id) {
    return db('schemes')
        .where({ id })
        .update(post)
}

function findSteps(id) {
    return db('steps')
        .where({ scheme_id: id })
        .orderBy('step_number')
}

async function remove(id) {
    const scheme = await findById(id)
    return db('schemes').where({ id }).del().then(() => scheme)
}