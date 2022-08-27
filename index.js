const express = require("express");
const path = require("path");
const http = require("http");
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')


//load config
// dotenv.config({ path: "./config/config.env" });
const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const route = require('./routes/route.js')
``
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

app.get('', function (req, res) {
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

app.post('/api/student', function (req, res) {

    var student = {
        id : req.body.s_id,
        name : req.body.s_Name,
        sClass : req.body.s_Class
    }

    const newStudent = new studenInfo(student)
    newStudent.save

})

app.post('/api/student/"s_Name', function (req, res) {
    const student = req.params.s_Name;
    studenInfo.find({name :student}).then(function(item){
        res.json(item);
    })

})

app.listen("3000");
