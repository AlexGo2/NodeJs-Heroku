const express = require('express');
const app = express(app);
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{ 
    res.send('Heroku, Online!');
});

app.listen(port, ()=>{ 
    app.send('Porta Online!');
});