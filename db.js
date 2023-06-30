const mongoose = require("mongoose");

//var mongoURL = 'mongodb+srv://shesh2509:shesh@cluster1.topo1hr.mongodb.net/the-menu'
var mongoURL = 'mongodb+srv://shesh2509:shesh123@nodeexpressprojects.tqadrfv.mongodb.net/the-menu?retryWrites=true&w=majority'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', () => {
    console.log('Connection successfull')
})

db.on('error', ()=>{
    console.log('Connection failed')
})

module.exports = mongoose