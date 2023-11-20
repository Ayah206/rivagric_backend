const mongoose = require('mongoose');

const uri = process.env.DB_KEY;

mongoose.connect(uri);

mongoose.set();

mongoose.connection.on('connected', function(){
    console.log('mongoose connected to '+ uri);
});
mongoose.connection.on('error', function(err){
    console.log('mongoose connection error'+ err);
});
mongoose.connection.on('disconnected', function(){
    console.log('mongoose disconnected ' );
});
