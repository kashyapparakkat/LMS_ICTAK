const express = require("express");
const path = require("path");
const http = require("http");
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const db = require("./database");
const coursematerial = require('./models/coursematerial')

const multer=require("multer");//for file uploading


const bcrypt=require('bcrypt');//encryption of password



// load config
// dotenv.config({ path: "./config/config.env" });
const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const route = require('./routes/route.js');
const batchmaterial = require("./models/batchmaterial");

// connect to mongo
/*mongoose.connect('mongodb://localhost:27017/dbName')
mongoose.connection.on('connected', ()=>{
    console.log("Connected to mongo db successfully")
})
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log("Error connecting to mongo db", err)
    }
})*/


//adding cors and body parser for middleware
app.use(bodyparser.json())
app.use(cors())



//fileuploading 

let upload=multer({dest:'uploads/'});
app.post('/file',upload.single('file'),(req,res,next)=>{
  try{

    const file=req.file;
    console.log(file);
    if(!file){
        const error=new Error("Please Upload a file");
        error.httpStatusCode=400;
        return next(error)
    }
    res.send(file)
  }
  catch(error){
    console.log("Error occured"+error);
  }


})


//static files
//app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static('upload'))

app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.send('Server started')
});

app.post('/forgot-password',(req,res)=>{
    console.log(req.body);
})


app.post('/api/material',async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var material = new coursematerial({
        ModuleName:req.body.module,
        ModuleDescription:req.body.desc,
        Video:req.body.video,
        Resources:req.body.resources
    })

    var bmaterial = new batchmaterial({
        ModuleName:req.body.module,
        ModuleDescription:req.body.desc,
        Video:req.body.video,
        Resources:req.body.resources,
        Isopen:false
    })

    try{
        const m1=await(material.save())
        bmaterial.save()
        res.json(m1)
    }catch(err){
        res.send('Error')
    }
})

app.get('/api/material',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    coursematerial.find().then((material)=>{
        res.send(material);
    })
})

app.get('/api/batchmaterial',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    batchmaterial.find().then((bmaterial)=>{
        res.send(bmaterial);
    })
})

app.delete('/api/material/:id',async(req,res)=>{
    try{
        const material1 = await coursematerial.findById(req.params.id)
        const m1 = await material1.remove()
        res.json(m1)
       }catch(err){
        res.send("Error" + err) 
       }
    })


    app.patch('/api/material/:id',async(req,res)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH");
        try{
         const material1 = await coursematerial.findById(req.params.id)
         
        material1.ModuleName=req.body.module
        material1.ModuleDescription=req.body.desc
        material1.Video=req.body.video
        material1.Resources=req.body.resources
         
         const m1 = await material1.save()
         res.json(m1)
        }catch(err){
         res.send("Error" + err) 
        }
     })
     
     app.get('/api/material/:id',async(req,res)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
        try{
         const material1 = await coursematerial.findById(req.params.id)
         res.send(material1)
        }catch(err){
         res.send("Error" + err) 
        }
     })


/*app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.sendFile(home);
});

app.get('/hi:abc', function (req, res) {
    //res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.send(`Hello from server`)
});*/
app.use("/api", route)

db()

app.listen("3000");
