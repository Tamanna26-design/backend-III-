const express = require("express")
const app=express();
const PORT =3000

app.use(express.json());

app.get("/",(req,res)=>{
    console.log("Request URL", req.url);
    console.log("Request Method",req.method);
    console.log("Request Headers",req.headers);
    res.send("Welcome to the homne page");
})


app.post("/",(req,res)=>{
    console.log("Request URL", req.url);
    console.log("Request Method",req.method);
    console.lof("Request Body:",req.body);
    res.send("Welcome to the post route");
})

app.listen (PORT,()=>{
    console.log('Server is running on port ${PORT}');
})