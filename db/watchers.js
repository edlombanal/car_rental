const {connection} = require('mongoose');

const gracefulShutdown = async () => {
    await connection.close();
};

const setUpMongoDBWatchers = () => {
    process.on('exit', gracefulShutdown);
    process.on('SIGTERM', gracefulShutdown);
    process.on('uncaughtException', gracefulShutdown);
};

module.exports = {gracefulShutdown, setUpMongoDBWatchers};