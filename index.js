const express = require('express');
const app = express();



app.get('/', (req,res) => {
    res.send({ start: "Hello There!" });
});


app.listen(3000);