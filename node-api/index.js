/* node.js 기본 내장 모듈 사용
const http = require('http');

http.createServer();
*/

/* 사용자 정의 모듈 사용
const math = require('./math.js');

const result = math.sum(1, 2);

console.log(result); // 3
*/

/* node.js 의 file system 모듈 사용
const fs = require('fs');
// 동기 방식
const data = fs.readFileSync('./data.txt', 'utf-8');
console.log(data);

// 비동기 방식
const data = fs.readFile('./data.txt', 'utf-8', function(err ,data) {
  console.log(data);
});
console.log('line after fs.readFile');
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  if(req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');  
  } else if(req.url === '/users') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('User list\n');
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});