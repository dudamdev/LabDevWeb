const listProducts = [];

const save = async (product) => {
    
    product.id = Math.floor(Math.random() * 1000);
    listProducts.push(product);
    return product;
}

const findAll = async () => {
    return listProducts;
}

const findById = async (id) => {
    return listProducts.find(p => p.id === id);
}

module.exports = {
    save,
    findAll,
    findById
}