const restify = require('restify');
const plugins = require('restify-plugins');
const config = require('./config');
const mongo = require('mongodb').MongoClient

const user = config.db.user;
const password = config.db.password;
const uri = config.db.uri;
const mongourl = `mongodb+srv://${user}:${password}@${uri}`;

//setup server
const server = restify.createServer({
	name: config.name,
	version: config.version
});
server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.bodyParser());


//Initialing server
server.listen(config.port, () => {
	//
	// Initializing MongoDB connection
	client = mongo.connect(mongourl, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	  }, (err, client) => {
	  if (err) {
		console.error(err)
		return
	  }

	  const db = client.db('12factor');
	  require('./routes')({ db, server, config });

	  console.log("Server Started on port:", config.port)
	})
});
