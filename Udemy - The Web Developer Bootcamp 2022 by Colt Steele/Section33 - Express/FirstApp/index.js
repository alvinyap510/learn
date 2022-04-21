const express = require('express');
const app = express();
const port = 8000;

// app.use((req, res) => {
//     console.log("New request")
//     // res.send("Hello, we got your request!!");
//     // res.send("" + JSON.stringify(req) + "");
// })

app.get('/', (req, res) => {
    res.send("<h1 style = 'color: indigo;'>home 12123<h1>");
})

app.get('/r/:subpages/:postID', (req, res) => {
    res.send(`Viewing post ${req.params.postID} of subpage ${req.params.subpages}`);
})

app.get('/cats', (req, res) => {
    res.send("meow");
})

app.get('/dogs', (req, res) => {
    res.send("woof");
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("Not a valid query!!")
    }
    res.send(`Here are the search results for ${q}:-`);
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