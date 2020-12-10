const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASS,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('database connected...');
}).catch(err => {
    console.log('connection Failed...');
});
module.exports = connection