'use strict'
require('dotenv').config();

module.exports = {
    name: 'sum12factor',
    version: '1.0.0',
    port: process.env.SERVER_PORT ,
    db: {
        uri: process.env.MONGO_URI,
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        database: process.env.MONGO_DATABASE,
        collection: process.env.MONGO_COLLECTION
    }
}