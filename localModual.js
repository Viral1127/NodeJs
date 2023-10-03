exports.Hello = ()=>{
    console.log("hello world");
}

exports.xy = ()=>{
    console.log("vc")
}

const http = require('http')

exports.httpserver = ()=>{
    
    const server = http.createServer((req , res)=>{
        const v = "hello";
        res.end(v);

    })

    console.log("server started");
    server.listen(2500)
}