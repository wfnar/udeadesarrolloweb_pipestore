// se instala nodemon y express 
// se instala jsonwebtoken
const express = require('express');
const server = require('express')();
const router = require('./productos/productos');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');

server.use(express.json());
server.use(router);

server.get("/home", (req, res) => {
    res.send(JSON.stringify({ user : "Hola Felipe"}));
});

server.get("/login", (req, res) => {
    res.sendFile(path.resolve('./login/index.html'));
});

let userAllowed = {
    username : 'pipe',
    password: '123',
    name: 'William',
    email: 'wfnarnajo@gmail.com'
}
server.post("/login", (req, res) => {
    if( userAllowed.username === req.body.username && userAllowed.password === req.body.password){
        let token = jwt.sign(userAllowed, 'snapserverKey');
        res.send(
            JSON.stringify({
                name: 'Felipe Naranjo',
                token: token
            })
        );
        console.log(token);
    }else{
        res.send('Usuario y Contraseña invalidos');
    }
});



server.listen(3006, () => {
    console.log("servidor inicializado!!");
});