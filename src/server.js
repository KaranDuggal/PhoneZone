require('dotenv').config();
const path = require('path');
const flash = require('express-flash')
const ejsLayout = require('express-ejs-layouts');
const express = require('express');
const app = express();
app.use(flash())

//database connecting
const Connection = require('./db/config');


// sessions 
const sessions = require('express-session');
const MongoDbStorage = require('connect-mongo')(sessions);
let mongostore = new MongoDbStorage({
    mongooseConnection:Connection,
    collection:'sessions'
})
// session config 
app.use(sessions({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:false,
    store:mongostore,
    cookie:{maxAge: 1000*60*60*24} //24 hous
}))

// Paths 
const staticFiles = path.join(__dirname,'../public')
const routesfile = path.join(__dirname, '../routes/web');
const viewsFiles = path.join(__dirname, '../views');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(flash())

// set template engine 
app.set('view engine', 'ejs')
app.set('views',viewsFiles)
app.use(ejsLayout);
app.use(express.static(staticFiles));
app.use(flash())



// routes 
require(routesfile)(app)

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server run on port No. ${PORT}`);
})