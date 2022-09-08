const express = require('express')
const path = require('path')
const { fileURLToPath } = require('url')

const cors = require('cors');

const app = express()
app.set('port', (process.env.PORT || 5000));
var server = app.listen(app.get('port'), function() {
  console.log('Socket app is running on port', app.get('port'));
});



const io = require('socket.io')(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

app.use(express.static(path.join(__dirname, '../../public')));
app.set('views', path.join(__dirname, '../../public'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', (req, res) => {
//    console.log(req.params.id)
    res.render('index.html')
})



//Conecta o socket
io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);
    // console.log(idUser)

      socket.on('idProd', data => {
        console.log('data in backend'+data)
       
          socket.broadcast.emit('openModal', data)

      });

  });