const user = require('../models').models.User;

const list = (req, res) => {
    user.findAll({})
        .then(user => res.send(user))
}

const retrieve = (req, res) => {
    user.findAll({
        where: {
            username: req.params.username
        }
    })
    .then(user => {
        if (user.length === 0) {
            res.status(500).send('user not found')
            
        } else {
            res.send(user)
        }
    })
}

const create = (req, res) => {
    return user.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).status(error))
}

const edit = (req, res) => {
    const id = parseInt(req.params.id)

    models.User.findByPk(id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                message: 'User Not Found',
                });
            }
            return user
                .update({ 
                    email: req.body.email || user.email,
                    password: req.body.password || user.password,
                })
                .then(() => res.status(200).send(user))  
                .catch((error) => res.status(400).send(error));
            })
    .catch((error) => res.status(400).send(error));
}

module.exports = {
    list,
    retrieve,
    create,
    edit
}