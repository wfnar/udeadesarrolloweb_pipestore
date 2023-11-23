const express = require('express');
const server = require('express')();
const router = require('./productos/productos');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { mongoClient } = require('mongodb');

server.use(express.json());
server.use(router);
server.use(cors({
    origin: "*"
}));

const connection = new mongoClient("mongodb://localhost:27017");

async function iniciarDB() {
    try {
      let user = {
        nombre: "Felipe",
        apellido: "Naranjo",
      };
  
      await connection.connect();
  
      await connection.db("ecommerce").collection("users").insertOne(user);
    } catch (e) {
      console.log(e);
    }
  }
  
  iniciarDB();
  
  server.use(express.static(path.resolve("./build")));
  server.get("/", (req, res) => {
    res.sendFile(path.resolve("./build/index.html"));
  });
  
  server.get("/app", (req, res) => {
    res.sendFile(path.resolve("./build/index.html"));
  });
  server.get("/app", (req, res) => {
    res.sendFile(path.resolve("./build/index.html"));
  });
  
  server.use(express.json()); // Para leer json
  server.use(cors()); // Permitir todas las conexione
  
  server.get("/users", async (req, res) => {
    let resultado = await connection
      .db("ecommerce")
      .collection("users")
      .find({ name: "Felipe" })
      .toArray();
  
    res.send(JSON.stringify({ resultado: resultado }));
  });
  
  server.get("/productos", (req, res) => {
    res.sendFile(path.resolve("./productos.html"));
  });
  server.post("/productos", async (req, res) => {
    let result = await connection.db("ecommerce").collection("productos").insertOne(req.body);
  
    res.send("Se guardo el producto");
  });


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
    console.log("servidor inicializado en el puerto 3006!!");
});