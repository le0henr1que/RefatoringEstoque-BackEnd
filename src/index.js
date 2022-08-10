const express = require('express')
const cors = require('cors')
require('../.env')

const server = express();

server.use(cors())
server.use(express.json())

// const TaskRoutes = require('./routes/TaskRoutes')
// server.use('/task', TaskRoutes)


// server.listen(3333, () => {
//     console.log('API ONLINE')
// })
 
server.get('/', function (req, res) {
    res.send('Hello World!');
  });
    
  server.listen(`${PORT}`, () => {
    console.log(`Node Rodando no Endereço http://localhost:${PORT}`)
  });