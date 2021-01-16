const express = require('express');
const app = express();
const port = 8000;
app.get("/",(req,res)=>res.send("Hello world"));
app.get("/signin",(req,res)=>(res.send("Sign In")));
app.get("/sign",(req,res)=>(res.send("Sign Out")));

app.listen(port,()=>{
  console.log("Server up and running..");
})