const {Router} = require('express')


const UserController = require('./app/controller/UserController')
const InventoryController = require('./app/controller/InventoryController')
const LoginController = require('./app/controller/LoginController')
const AuthMidleware = require("../src/app/middlewares/AuthMidleware")
const SocketController = require('./app/controller/SocketController')

const routes = new Router()

//User Controller
routes.get("/user", AuthMidleware, UserController.show)
routes.post("/user", AuthMidleware, UserController.store)
routes.put('/user/:id', AuthMidleware, UserController.update);

//Inventory Controller
routes.post("/inventory", AuthMidleware, InventoryController.create)
routes.get("/showInventory", AuthMidleware, InventoryController.showInventory)
routes.put("/updateInventory/:id", AuthMidleware, InventoryController.update)



routes.post("/login", LoginController.index)

module.exports = routes;