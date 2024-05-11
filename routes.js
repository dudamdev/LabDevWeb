const { getProducts, create, findById } = require('./api/v1/product/product-controller');
const schema = require('./api/v1/product/product-schema');

const klawSync = require('klaw-sync');

const plugins = {
    name: 'routes',
    version: '1.0.0',
    register: async (server, options) => {

        const routes = [];

        klawSync(options.routesBaseDir, { nodir: true }).filter((file) => {
            return (file.path.indexOf('-routes.js') > 1);
        }).forEach((_file) => {
            const routeObject = {
                plugin: require(_file),
                options: {
                    config: options.config
                }
            };

            routes.push(routeObject);
        });

        await server.register(routes);
    }
};

const routes = [
    {
        method: "GET",
        path: "/v1/products",
        options: {
            handler: getProducts,
            validate: schema.getProducts
        }
    },
    {
        method: "GET",
        path: "/v1/products/{id}",
        options: {
            handler: findById,
            validate: schema.getById
        }
    },
    {
        method: "POST",
        path: "/v1/products",
        options: {
            handler: create,
            validate: schema.createProductsSchema
        }
    }
];

module.exports = routes;