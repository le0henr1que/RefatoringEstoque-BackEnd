const app = require('./app');
require('dotenv').config()

var PORT = process.env.PORT || `${process.env.PORT}`

app.listen(PORT, () => {
    console.log(`App listen on port : ${PORT}`)
})