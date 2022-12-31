const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(function(req, res, next){
   var data = "";
   req.on('data', function(chunk){ data += chunk})
   req.on('end', function(){
      req.rawBody = data;
      next();
   })
})

// Your route registration:
app.get('/', function(){// whatever...})

app.post('/test', function(req, res){
    console.log(req.rawBody);
    res.send("your request raw body is:"+req.rawBody);
})
