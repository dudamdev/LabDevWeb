const { server, plugins } = require('./server');

(async () => {

    //register routes plugins
    await server.register(plugins);

    await server.start();
    console.log("Server listening: " + server.info.uri);
})();