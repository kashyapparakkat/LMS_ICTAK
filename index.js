const express = require("express");
const path = require("path");
const http = require("http");
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')





// load config


// dotenv.config({ path: "./config/config.env" });
const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const route = require('./routes/route.js')

// connect to mongo
mongoose.connect('mongodb://localhost:27017/dbName')
mongoose.connection.on('connected', ()=>{
    console.log("Connected to mongo db successfully")
})
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log("Error connecting to mongo db", err)
    }
})

app.use('/api', route)

//adding cors and body parser for middleware
app.use(bodyparser.json())
app.use(cors())

//static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.send('Server started')
});


/*app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.sendFile(home);
});

app.get('/hi:abc', function (req, res) {
    //res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.send(`Hello from server`)
});*/



app.listen("3000");
