
import fs from 'fs'
import http2 from 'http2'

const server = http2.createServer({
    key: fs.readFileSync('src/keys/server.key'),
    cert: fs.readFileSync('src/keys/server.ctr')
},(req, res) => {

console.log(req.url);

    if (req.url === '/') {
        const htmlFile = fs.readFileSync('src/index.html', 'utf-8')
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(htmlFile)
    }

    if (req.url?.endsWith('.js')) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' })
    } else if (req.url?.endsWith('.CSS')) {
        res.writeHead(200, { 'Content-Type': 'text/css' })
    }

    const responseContext = fs.readFileSync(`src${req.url}`, 'utf-8')
    res.end(responseContext)

})

server.listen(8080, () => {
    console.log('server running at port 8080');
})