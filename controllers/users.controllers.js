const { request ,response } = require('express')

const usersGet = (req = request, res = response) => {
    const { apikey, name = 'No name', lastname, page = 1, limit } = req.query;
    res.send({
        msg: 'get API - controller',
        apikey,
        name,
        lastname,
        page,
        limit
    })
}

const usersPut = (req = request, res = response) => {
    const { id } =req.params;
    res.send({
        msg: 'put API - controller',
        id
    })
}

const usersPost = (req = request, res = response) => {
    const {nombre, edad} = req.body;
    res.send({
        msg: 'post API - controller',
        nombre,
        edad
    })
}

const usersDelete = (req = request, res = response) => {
    res.send({
        msg: 'delete API - controller'
    })
}

const usersPatch = (req = request, res = response) => {
    res.send({
        msg: 'patch API - controller'
    })
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}