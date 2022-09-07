const  mongoose  = require("mongoose");
require('dotenv').config()


class Connection {
    constructor(){
        this.dataBaseConnectionMongoDB();
    }
    dataBaseConnectionMongoDB(){
        console.log(process.env.DB_USER)
        this.mongoDBConnection = mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.puymz.mongodb.net/?retryWrites=true&w=majority`)
        // this.mongoDBConnection = mongoose.connect("mongodb://localhost:27017/nodejs")
        .then(() => {
            console.log("Conexão estabelecida com Sucesso com o mongoDB");
        })
        .catch((error) => {
            console.log(`Erro ao Estabelecer conexão com o mongoDB: ${error}`)
        })
    }
}

module.exports = new Connection