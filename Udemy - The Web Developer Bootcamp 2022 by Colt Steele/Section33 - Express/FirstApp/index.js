const express = require('express');
const app = express();
const port = 8000;

// app.use((req, res) => {
//     console.log("New request")
//     // res.send("Hello, we got your request!!");
//     // res.send("" + JSON.stringify(req) + "");
// })

app.get('/', (req, res) => {
    res.send("<h1 style = 'color: indigo;'>home<h1>");
})

app.get('/r/:subpages', (req, res) => {
    res.send(`This is a subpage for ${req.params.subpages}`);
})

app.get('/cats', (req, res) => {
    res.send("meow");
})

app.get('/dogs', (req, res) => {
    res.send("woof");
})

app.get('*', (req, res) => {
    res.send("path not found");
})

app.post('*', (req, res) => {
    res.send("post request");
})

app.listen(port, () => {
    console.log("listening at port 8000")
})