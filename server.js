const http = require('http');
const fs=require('fs')
const home=fs.readFileSync('./index.html')
const about=fs.readFileSync('./about.html')
const services=fs.readFileSync('./services.html')
const contact=fs.readFileSync('./contact.html')

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req.url);
  res.setHeader('Content-Type', 'text/html');
  if(req.url=="/"){
  res.end(home);}
  else if(req.url=="/about"){
  res.end(about);}
  else if(req.url=="/services"){
  res.end(services);}
  else if(req.url=="/contact"){
  res.end(contact);}
  else { statusCode=404;
    res.end("<h1> 404 not found!</h1>");}
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});