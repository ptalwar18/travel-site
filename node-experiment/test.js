var filesYo = require('fs');  //node's file system functions
var https = require('https');
filesYo.writeFile(__dirname+"/index.html","<h1>HTML rocks</h1>");

var dogUrl = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-6f6FKZjHkPYKHbjrZ1P4tvmy5vIHCm6o8xSMw_UWyGet7aelzW6za5c";

var dogFile = filesYo.createWriteStream(__dirname+"/node-dog.jpg");
var request = https.get(dogUrl,function(response){
    response.pipe(dogFile);
});