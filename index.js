const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyparser.json({limit: '50mb'}));



app.post('/post-test', function(req, res){
   console.log(req.body);
   res.status(200);
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
