const express = require('express');
const cruds = require('../Controller/userController');

const routes = (app)=>{
    app.get("/test",(req,res)=>{
        res.send("Hello from home");
    });
    app.post("/addUser", cruds.addUser);  
};

module.exports = {routes};