const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/data.json'){
        res.end(fs.readFileSynch('data.json'));
    } else if (req.url === '/style.css'){
        res.setHeader('Content-Type', 'text/css');
        res.end(fs.readFileSynch('style.css'));
    }else if (req.url === '/script.js'){
        res.end(fs.readFileSynch('script.js'));
    } else {
        res.end(fs.readFileSynch('index.html'));
    }
}).listen(process.env.PORT || 3000);