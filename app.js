// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const adminData = require('./models/productModal');

// app.use(express.json())

// //Routes

// app.get('/', (req,res)=>{
//     res.send('Hello welcome to Node js Setup')
// })


// app.post('/adminData',async(req,res)=>{
//     try {
//         const AdminData = await adminData.create(req.body)
//         res.status(200).json(AdminData)
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message:error.message})
//     }
// })


// mongoose.set('strictQuery',false)
// mongoose.connect("mongodb+srv://Manojkapasia:manoj123@cluster0.2rby3.mongodb.net/AdminData?retryWrites=true&w=majority")
// .then(()=>{
//     console.log('connect the database');
//     app.listen(3000, ()=>{
//         console.log('Node api is running on port 3000');
//     })
// }).catch(()=>{
//     console.log("not connect");
// })


const express= require("express");
const config = require("config");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/index");
const { port } = config.get("app");
const app = express();
const http = require("http");
const server = http.createServer(app);
const adminRoute = require("./routes/v1/admin")
// Access-Control-Allow-Origin
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
// parse application/json
app.use(bodyParser.json());

// combine routes
app.use('/api/v1/admin',adminRoute);

//database connection
db.mongoConnection();

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})