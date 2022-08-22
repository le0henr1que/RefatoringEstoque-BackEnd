const {Router} = require('express')

const UserController = require('./app/controller/UserController')
const LoginController = require('./app/controller/LoginController')
const AuthMidleware = require("../src/app/middlewares/AuthMidleware")

const routes = new Router()

routes.get("/user", AuthMidleware, UserController.show)
routes.post("/user", AuthMidleware, UserController.store)
routes.put('/user/:id', AuthMidleware, UserController.update);

routes.post("/login", LoginController.index)

module.exports = routes;