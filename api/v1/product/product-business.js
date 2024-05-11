const repository = require('./product-repository')

const create = async (product) => {

    //logica negocio
    return repository.save(product);
}

const list = async () => {
    return repository.findAll();
}

const findById = async (id) => {
    return repository.findById(id);
}

module.exports = {
    create,
    list,
    findById
}