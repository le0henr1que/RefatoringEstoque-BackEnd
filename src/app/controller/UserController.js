const User = require('../models/User')
const bcrypt = require('bcryptjs')
const yup = require('yup')

class UserController {
    index(req, res){
        console.log(req.body)
    }
    async show(req, res){
        // await userModel.find({User})
        // .then(response => {
        //     return res.status(200).json(response);
        // })
        // .catch(error => {
        //         return req.status(500).json(error)
        //     }

        // )
    }
    async store(req, res){


        
        let schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(), 
            password: yup.string().required(),
        
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                error: true, 
                message: "Erro ao tentar inserir user no Mongo"
            })
        }
        
    

        let userExist = await User.findOne({email: req.body.email})
        if(userExist){
            return res.status(400).json({
                error: true, 
                message: "Usuário já existente"
            })
        }


        const {name, email, password} = req.body;


        const data = { name,  email,  password }

        

        data.password = await bcrypt.hash(data.password, 8);

        await User.create(data, (err) => {
            if(err)
            return res.status(400).json({
                error: true, 
                message: "Erro ao tentar inserir user no Mongo"
            })
            return res.status(200).json({
                error: false, 
                message: "Usuario cadastrado"
            })
        })
    }
}

module.exports = new UserController();