const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

app.post('/post-test', (req, res) => {
    const body = req.rawBody

    console.log(body);
    res.send()
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
