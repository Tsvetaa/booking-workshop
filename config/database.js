const mongoose = require('mongoose');

const connStr = process.env.DATABASE_CONNECTION_STRING || 'mongodb://localhost:27017/booking';

module.exports = async (app) => {
    try {
        await mongoose.connect(connStr, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('DB is connected')
    } catch (err) {
        console.error('Error initializing DB');
        console.error(err.message);
        process.exit(1);
    }

};