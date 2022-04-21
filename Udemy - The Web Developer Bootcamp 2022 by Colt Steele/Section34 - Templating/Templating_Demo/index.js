const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    // res.send("<h1>This is the homepage</h1>")
    res.render('home');
})

app.get('/random', (req, res) => {
    let num = Math.ceil(Math.random() * 100);
    res.render('random', { rand : num });
})

app.listen(port, () => {
    console.log("Listening port 3000");
})