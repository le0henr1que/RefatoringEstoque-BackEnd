const app = require('./app');
const { serverHttp } = require('./config/socketIo');
require('dotenv').config()



var PORT = process.env.PORT || `${process.env.PORT}`

serverHttp.listen(PORT, () => {
    console.log(`App listen on port : ${PORT}`)
})

// app.listen(PORT, () => {
//     console.log(`App listen on port : ${PORT}`)
// })