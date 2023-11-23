const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");


let productos = [
  {
      name : 'Camisa Hombre',
      price : 100000,
      description : 'Camisa manga larga para hombre',
      imagen: 'img/camisa.jpg',
      cantidad: 100
  },
  {
      name : 'Blusa',
      price : 90000,
      description : 'Blusa en diferentes colores',
      imagen: 'img/blusa.jpg',
      cantidad: 100
  },
  {
      name : 'Jean Hombre',
      price : 150000,
      description : 'Jean Hombre en diferentes tallas',
      imagen: 'img/jeanhombre.jpg',
      cantidad: 100
  },
  {
      name : 'Jean Mujer',
      price : 170000,
      description : 'Jean Mujer en diferentes tallas',
      imagen: 'img/jeanmujer.jpg',
      cantidad: 100
  }
];
router.get("/productos", (req, res) => {
  let token = req.headers["authorization"];

  try {
    jwt.verify(token, "snapserverKey");
    res.send(JSON.stringify({ productos: productos }));
  } catch (e) {
    res.send(JSON.stringify({ error: "No tienes permiso para ver los productos" }));
  }
});
router.get("/productos/:id", (req, res) => {
  res.send(JSON.stringify({ producto: productos[req.params.id] }));
});

module.exports = router;