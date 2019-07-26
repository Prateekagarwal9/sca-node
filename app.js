var http = require('http');
const express = require("express");
const app = express();

app.get('/sample', (req, res) => {
var spawn = require("child_process").spawn,child;
child = spawn("powershell.exe",[".\\test.ps1"]);
child.stdout.on("data",function(data){
    console.log("Powershell Data: " + data);
    res.send("Powershell Data: " + data);
});
child.stderr.on("data",function(data){
    console.log("Powershell Errors: " + data);
    res.send("Powershell Errors: " + data);
});
child.on("exit",function(){
    console.log("Powershell Script finished");
    res.send("Powershell Script finished")
});
child.stdin.end();
});
var httpServer = http.createServer(app);
httpServer.listen(8001);
