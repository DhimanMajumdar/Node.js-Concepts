const http=require("node:http");

const server = http.createServer(function (req,res){
    // reply to them with Hello World -> res.end("Hello World");
    if(req.url==="/getSecretData"){
        res.end("No Secret Data");
    }
    res.end("Hello World");
});

server.listen(7778); //7778 is PORT number



