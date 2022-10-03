const express = require('express');
const databaseConfig = require('./config/database')
const expressConfig = require('./config/express');
const routsConfig = require('./config/routes');

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routsConfig(app);
    

    app.listen(3000, () => console.log('Server listening on port 3000'));
}

start();