const express = require("express");
const path = require("path");
const http = require("http");
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const db = require("./database");
const coursematerial = require('./models/coursematerial')
const batchmaterial = require('./models/batchmaterial')
const quiz = require('./models/quiz')


const multer=require("multer");//for file uploading
const assignment=require('./models/assignment')


const bcrypt=require('bcrypt');//encryption of password

const port = process.env.PORT || "3000";

// load config
// dotenv.config({ path: "./config/config.env" });
const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("./dist/client"));
//app.use(express.static('uploads'));

const route = require('./routes/route.js')

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
app.use(cors());





//static files
//app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static('upload'))

/*app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.send('Server started')
});*/

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
app.post('/api/setup-quiz',async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var quizdata = new quiz({
        Question:req.body.question,
        Opt1:req.body.opt1,
        Opt2:req.body.opt2,
        Opt3:req.body.opt3,
        Opt4:req.body.opt4,
        Answer:req.body.answer
    })

    try{
        const m1=await(quizdata.save())
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
app.get('/api/setup-quiz',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    quiz.find().then((material)=>{
        res.send(material);
        console.log(material)
    })
})


app.put('/api/submit-quiz',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    console.log("Request body=== ",req.body)
    id=req.body.id,
        StudentAnswer = req.body.StudentAnswer


    quiz.findByIdAndUpdate({"_id":id},
        {$set:{"StudentAnswer":StudentAnswer
            }})
        .then(function(){
            res.send();
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

    //delete all
    app.delete('/api/setup-quiz',(req,res)=>{
        console.log("called")
        quiz.deleteMany({}, function(err, result) {
            if (err) {
                console.log(err);
            }
            res.send(result)
        });
        })
    //delete all ends



        app.delete('/api/setup-quiz/:id',async(req,res)=>{
            try{
                const material1 = await quiz.find()
                const m1 = await material1.remove()
                res.json(m1)
               }catch(err){
                res.send("Error" + err) 
               }
            })
    app.delete('/api/batchmaterial/:id',async(req,res)=>{
        try{
            const material1 = await batchmaterial.findById(req.params.id)
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

     app.patch('/api/batchmaterial/:id',async(req,res)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH");
        try{
            const bmaterial1=await batchmaterial.findById(req.params.id)
            bmaterial1.ModuleName=req.body.module
            bmaterial1.ModuleDescription=req.body.desc
            bmaterial1.Video=req.body.video
            bmaterial1.Resources=req.body.resources
            bmaterial1.Isopen=req.body.isopen
            console.log(batchmaterial)
            const bm1=await bmaterial1.save()
            res.json(bm1)
        }catch(err){
           res.send('Error' +err)
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

     app.get('/api/batchmaterial/:id',async(req,res)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
        try{
            const bmaterial1=await batchmaterial.findById(req.params.id)
            res.send(bmaterial1)
        }catch(err){
            res.send('Error' + err)
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

app.get('/*', function(req, res) {
    res.header("Access-Control-Allow-Origin",'*');
    res.header("Access-Control-Allow-method:GET,POST,PUT,DELETE");
    res.sendFile(path.join(__dirname + '/dist/client/index.html'));
});

db()

//app.listen("3000");
app.listen(port,()=>{
    console.log("Server Ready on 3000");
});
