const app = require('./app');
// const { serverHttp } = require('./config/socketIo');
require('dotenv').config()

// const http = require("http")
// const { Server } = require('socket.io')
// const serverHttp = http.createServer(app)
// const io = new Server(serverHttp)

var PORT = process.env.PORT || `${process.env.PORT}`

// serverHttp.listen(PORT, () => {
//     console.log(`Socket listen on port : ${PORT}`)
// })

app.listen(PORT, () => {
    console.log(`App listen on port : ${PORT}`)
})