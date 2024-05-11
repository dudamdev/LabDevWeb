const Joi = require("joi");

const createProductsSchema = {
    payload: Joi.object({
        name: Joi
                .string()
                .min(3)
                .max(60)
                .required(),
        quantity: Joi.number()
                     .positive()
                     .integer()
                     .required()
    })
};

const getById = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
    })
}

const getProducts = {
    query: Joi.object({
        name: Joi
            .string()
            .min(1),
        status: Joi
                .string()
                .valid('ativo', 'inativo', 'pendente')
                .default('ativo')
    })
}

module.exports = {
    createProductsSchema, 
    getById,
    getProducts};