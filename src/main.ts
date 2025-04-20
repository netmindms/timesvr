const http = require('http')
import express from 'express'
const pkgJson = require('../package.json')
import os from 'os'

if(process.argv[2] === '-v') {
    console.info(pkgJson.version)
    process.exit(0)
}

process.on('SIGTERM', ()=> {
   console.info('on SIGTERM')
   process.exit(0)
})

console.info('start timersvr, version:', pkgJson.version)
const app = express()
app.get('/time', (req, resp) => {
    console.info('[%s] %s \npeerAddr=%s:%d', os.hostname(), new Date().toISOString(), req.socket.remoteAddress, req.socket.remotePort)
    resp.json({current: new Date().toISOString(), version: pkgJson.version})
})

const server = http.createServer(app)
server.listen(8000, '0.0.0.0')

