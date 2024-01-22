/* const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode= 200;
    res.setHeader('content-type','text/html')
    res.end('hi')
});
server.listen(3000); */

//************** */
/* var http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(3000);
console.log(`Server is listening on http://localhost:5000`)
console.log(server.response) */

/* var http = require('http');

http.createServer((req, res)=> {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Log the response body to the terminal
  var responseBody = 'Hello World!';
  console.log('Response Body:', responseBody);

  res.end(responseBody);
}).listen(3000);

console.log('Server running at http://localhost:3000/'); */


//******************************* */
const http = require('http');
const port =3000;

const fs = require('fs');

fs.readFile('demofile.html', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  

const data = 'Hello World';
fs.writeFile('NewDemoFile.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

const appended = '/new Line'
fs.appendFile('NewDemoFile.txt', appended, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });

const server = http.createServer((req, res) =>{
  // Log request details to the terminal
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);

  // Set the response content type
  const statusCode=200;
  

  res.writeHead(200, {'Content-Type': 'text/html'});

  // Handle different HTTP methods
  // send request using postmann or in the terminal curl -X POST http://localhost:5000
  if (req.method === 'GET') {
    res.end('Hello World! This is a GET request.');
  } else if (req.method === 'POST') {
    res.end('Hello World! This is a POST request.');
  } else {
    res.end('Hello World! Unsupported HTTP method.');
  }

});
server.listen(port);

console.log(`Server listening at http://localhost:${port}/`);
