const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const apiRoutes = require('./api-routes');
const flash = require('express-flash')


const app = express();
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

app.use(flash())

// Added check for DB connection
const db = require('./auth/keys').MongoURI

//connect to Mongo 
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('mongodb Connected...'))
    .catch(err => console.log(err))


const port = process.env.PORT || 3000;

app.get('/', (req, res) =>
{
	app.use(express.static(__dirname + '/docs'));
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Access-Control-Allow-Origin', req.header('Origin') || '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS,PATCH");
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.statusCode = 200;
	res.sendFile(path.join(__dirname + "/docs/"));
});

app.use('/api', (req, res, next) => 
{
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', req.header('Origin') || '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS,PATCH");
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.status(200);
	next();
})

app.use('/api', apiRoutes);

app.listen(port, function () {
     console.log("API running on port " + port);
});