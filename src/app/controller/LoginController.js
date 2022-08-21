const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../../config/auth')

// require('dotenv').config()
class LoginController {
    async index(req, res) {
        const {email, password} = req.body

        const userExist = await User.findOne({email})

        if(!userExist){
            return res.status(400).json({
                error: true, 
                message: "Usuário Não Existe"
            })
        }

        if(!(await bcrypt.compare(password, userExist.password))){
            return res.status(400).json({
                error: true, 
                message: "Senha Inválida"
            })
        }

        return res.status(200).json({
            user:{
                name: userExist.name,
                email: userExist.email,
                area: userExist.area
            }, 
            token:jwt.sign({id:userExist._id}, config.secret, {expiresIn:config.expireIn})
        })
    }
}

module.exports = new LoginController()