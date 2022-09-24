// import package mongoose 
const mongoose = require('mongoose');

// import configuration mongodb from app/config/index.js
const {urlDB} = require('../config');

// connect mongodb with configuration we import
mongoose.connect(urlDB,{
  useNewUrlParser: "true",
  useUnifiedTopology: "true"
}).then(()=>{
  console.log("Database Connected");
}).catch((err)=>{
  console.log("cannot connect database!",err);
  process.exit()
});

// save connsection to contant db
const db = mongoose.connection;

// export db so that we can use
module.exports = db;