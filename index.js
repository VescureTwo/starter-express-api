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
});

app.post('/api/verifyhwid', function(req, res){
   const hwid = req.rawBody;
   res.send(`{ "${hwid}":{"Name":"cracked by vescure","UseProfilePic":true,"Sub":1,"DaysLeft":9999} }`);
});


app.listen('3000', 'localhost', (e) => {
   console.log('Listening on localhost:3000');
});
