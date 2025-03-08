const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Curtis Household');
})

app.get('/tony',(req, res) => {
    res.send('Tony Curtis');
})

app.get('/kids',(req, res) => {
    res.send('Curtis Kids');
})


const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening on port ' + (process.env.port || port));