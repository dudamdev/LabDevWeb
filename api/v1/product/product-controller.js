const business = require('./product-business');

const getProducts = async (request, h) => {
    
    const {query} = request;
    console.log(query);
    
    const result = await business.list();
    return h.response(result).code(200);
}

const create = async (request, h) => {
   
    const result = await business.create(request.payload);

    return h.response(result).code(201);
}

const findById = async (request, h) => {
    // GET /v1/products
    // GET /v1/products/{id}
    const productId = request.params.id;

    return h.response(await business.findById(productId));
}

module.exports = {
    getProducts,
    create,
    findById
};