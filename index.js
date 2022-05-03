const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 3000;

app.get(port, (req, res)=>{ 
    res.send('Heroku, Online!');
});

app.listen(port, ()=>{ 
    console.log('Porta Online!');
});