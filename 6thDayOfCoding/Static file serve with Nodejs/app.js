const http = require('http');
const fs =  require('fs');

const hostName =  "127.0.0.1";
const portName = 3000;

const home = fs.readFileSync('pages/index.html');
const about = fs.readFileSync('pages/about.html');
const contact = fs.readFileSync('pages/contact.html');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    const url = req.url;

    if(url == "/index.html") {
        res.end(home);
    } else if (url == "/about.html") {
        res.end(about)
    } else if (url == "/contact.html") {
        res.end(contact);
    } else {
        res.statusCode = 400;
        res.end("404 page not found");
    }
})

server.listen(portName, hostName, () => {
    console.log(`Server running at: ${hostName}:${portName}`);
})