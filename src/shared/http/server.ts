const express = require("express");

const app = express();

app.liste(3000, () => {
  console.log("Servido inicializado, teste");
});
