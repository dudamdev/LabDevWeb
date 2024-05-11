const Hapi = require("@hapi/hapi");
const routes = require('./routes');
const { options } = require("joi");

const server = Hapi.server({
    port: 5000,
    host: "0.0.0.0"
});

//add routes path to hapi context
routes.forEach((path) => server.route(path));

const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
]

module.exports = { server, plugins };
