const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send("Hello world!!");
})

app.listen('8085', () => {
    console.log('Server started at port 8085');
})