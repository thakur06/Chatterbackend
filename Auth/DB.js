const mongoose = require('mongoose');
require('dotenv').config()
const con=async()=>{ await mongoose.connect(process.env.DB).then(console.log("connected to database")).catch(err=>console.log(err))};

module.exports = con;
