const app = require('../app');
const http = require("http")
const { server } = require('socket.io')
require('dotenv').config()

const serverHttp = http.createServer(app)
const io = new server(serverHttp)

export {serverHttp, io}