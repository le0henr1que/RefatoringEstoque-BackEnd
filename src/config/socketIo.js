const app = require('../app');
const http = require("http")
const { Server } = require('socket.io')
require('dotenv').config()

const serverHttp = http.createServer(app)
const io = new Server(serverHttp)

module.exports = {serverHttp, io}