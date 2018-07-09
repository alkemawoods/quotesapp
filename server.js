var dotenv = require('dotenv').config();
var cors = require('cors');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  apiKey = process.env.API_KEY,
  mongoose = require('mongoose'),
  Quote = require('./api/models/quoteModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  if (req.headers.authorization != 'Bearer ' + process.env.API_KEY && req.method != 'GET') {
    return res.status(403).json({ error: "Not authorized to perform this operation!" });
  }
  next();
});

var routes = require('./api/routes/quoteRoutes');
routes(app);


app.listen(port);


console.log('QuotesApp server started on: ' + port);
