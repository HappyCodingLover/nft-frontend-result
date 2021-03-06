const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();


app.use(express.static(__dirname + '/build'));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build', 'index.html'));
});

app.listen(port,()=>{
	console.log("server listening on http://127.0.0.1:8080. ")
});