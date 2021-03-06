var express = require('express');
var app = express();
app.set('view engine','pug');
app.use(express.static(__dirname + '/static'));

//This default route will be used for texts
app.get('',(req,res)=>{
    console.log('Index is rendered');
    res.render('index');
});

app.listen(3000,()=>{
    console.log('Begin listening');
});