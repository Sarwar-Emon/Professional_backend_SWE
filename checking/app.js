const http= require('http');

const webserver= http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'});
    res.end(
        '<h1> Hello, this is an HTML text servery by raw Node.js!</h1>'
    )
});

// port range
webserver.listen(3000,()=>{
    console.log('server is running..');
})