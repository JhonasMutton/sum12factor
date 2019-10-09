'use strict'
module.exports = function (ctx) {
    const uuid = require('uuid/v1');
    const db = ctx.db,
        server = ctx.server,
        config = ctx.config
    const collection = db.collection(`${config.db.collection}`);

    server.post('/sum', (req, res, next) => {
        const transactionID = uuid()
        console.log("Transaction:", transactionID, "| Post in /sum with body:", req.body)
        var sum = req.body.reduce((a, b) => a + b, 0);

        const data = Object.assign({}, req.body, {
            sum: sum,
            writed: new Date()
        })

        collection.insertOne(data)
        console.log("Transaction:", transactionID, "| Result is:", sum, "| Persisted is", data)

        res.send(200, sum);
        return next();
    });

}