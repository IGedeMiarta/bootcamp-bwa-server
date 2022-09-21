// import package mongoose 
const mongoose = require('mongoose');

// import configuration mongodb from app/config/index.js
const {urlDb} = require('../config');

// connect mongodb with configuration we import
mongoose.connect(urlDb, { useNewUrlParser: true, useCreateIndex: true });

// save connsection to contant db
const db = mongoose.connection;

// export db so that we can use
module.exports = db;