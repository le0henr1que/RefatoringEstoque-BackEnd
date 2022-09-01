const Inventory = require('../models/Inventory')
// const bcrypt = require('bcryptjs')
const yup = require('yup');
const { response } = require('../../app');
// const { default: shape } = require('@material-ui/core/styles/shape');

class InventoryController {

    async create(req, res){

        let schema = yup.object().shape({
            name: yup.string().required(),
            description: yup.string().required(),
            amount: yup.number().required()
        })

        const {name, description, amount} = req.body

        const data = {name, description, amount}

        await Inventory.create(data, (err) => {
            if(err)
            return res.status(400).json({
                error:true, 
                message: "Erro ao Tentar Inserir Produto"
            })
            return res.status(200).json({
                error: false, 
                message: "Produto Adicionado com Sucesso!"
            })
        })
    }

    async showInventory(req, res){
        await Inventory.find()
        .then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return req.status(500).json(error)
        })
    }
    
    async update(req, res){
        await Inventory.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response =>{
            return res.status(200).json({error:false, message:'Produto Atualizado com Sucesso!'})
        }).catch(error => {
            return res.status(400).json({error:true, message:'Erro ao tentar atualizar produto', error:error})
        })
    }

}

module.exports = new InventoryController()