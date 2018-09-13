const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const controller=require('./Controller/controller');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/assets',express.static(__dirname+'/public'));
app.use('/api',controller);

module.exports=app;