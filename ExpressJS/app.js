const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); //Allows request to continue to next middleware in line
});

app.use((req, res, next) => {
    console.log('Another middleware');
    res.send('<h1>Hello from express<h1>');
});

app.listen(3001);