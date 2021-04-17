const express = require('express');
const path = require('path');
app.use(express.static(__dirname + '/dist/ec-project'));
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/ec-project/index.html'));
});
app.listen(process.env.PORT || 8080);