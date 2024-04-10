const http = require('http');
const server = http.createServer((request, response)=>{
    const status = '200';
    const mimeType = {'Content-type': 'text/html' };
    const contentResponse = '<html><body> Hola </body></html>';
    response.writeHead(status, mimeType);
    response.write(contentResponse);
    response.end();
});
server.listen(5500);
console.log('Mi primer servidor');