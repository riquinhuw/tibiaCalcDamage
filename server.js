const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
require('dotenv/config');

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(routes);


var dia = new Date();
console.log("Iniciando o Tibia Calc Damage. "+String(dia.getDate()).padStart(2, '0')+"/"+String(dia.getMonth() + 1).padStart(2, '0')+"/"+dia.getFullYear()+" "+dia.getHours()+":"+dia.getMinutes()+":"+dia.getSeconds());


app.listen(process.env.PORT || 3333, ()=>{
  console.log('Listen in port 3333.')
});