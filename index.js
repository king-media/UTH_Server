import http from 'http';
import fs from 'fs';

const env = process.env.ENVIRONMENT

console.info(`In ${env} environment`)

const isDev = env === 'development'

console.info('Defining server')

http.createServer((request, response) => {
    fs.readFile('./demo.html', (err, html) => {
        if (err) {
            response.writeHead(400)
            response.write(`Issue reading html file ${err}`)
            response.end()
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    });
}).listen(8000);

// Error Middleware


// IN Dev only Remove when deploying
// if (isDev) {
//     server.listen(3000)
// }
//
// if (isTesting) {
//     server.listen(3998)
// }
