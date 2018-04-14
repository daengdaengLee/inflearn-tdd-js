/* node.js 기본 내장 모듈 사용
const http = require('http');

http.createServer();
*/

/* 사용자 정의 모듈 사용
const math = require('./math.js');

const result = math.sum(1, 2);

console.log(result); // 3
*/

// node.js 의 file system 모듈 사용
const fs = require('fs');

const data = fs.readFileSync('./data.txt', 'utf-8');

console.log(data);

