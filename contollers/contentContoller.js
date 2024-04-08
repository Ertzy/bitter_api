const visualScreen = require('../models/visualModel')

const getContent = async (req, res) =>{
    const contents = await visualScreen.find({})
    res.send(contents)
}

const downs = async (req, res) =>{
    const {title, content} = req.body
    const make = await visualScreen.create({title, content})
    console.log(req.body)
    res.status(200).send(make)

}

const delate = async (req, res) =>{
    const {id} = req.body
    const del = await visualScreen.deleteOne({_id: id})
    res.status(200).send(del)
}

module.exports = {
    downs,
    getContent,
    delate
}

