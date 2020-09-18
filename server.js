const express = require('express');
const app     = express();
const bodyParser = require('body-parser');

//to be used before crud operations handlers
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(3000, function() {
    console.log('Listening on 3000');
})

//get method is handled with app.get(endpoint, callback)
//endpoint is the path and callback is a function that takes two object request(req) and response(res) as an arguments.

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/quotes', (req, res) =>{
    console.log(req.body);
});

