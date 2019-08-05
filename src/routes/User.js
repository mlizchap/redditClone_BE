const Router = require('express').Router
const models = require('../models').models;

const router = Router();

router.get('/all', (req, res) => {
    models.User.findAll({})
        .then(user => res.send(user))
})
router.get('/:username', (req, res) => {
    models.User.findAll({
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
})

router.post('/new', (req, res) => {
    console.log(req.body.username, req.body.email, req.body.password,)
    return models.User.create({
        
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    // .then(() => User.findOrCreate({
    //     where: {
    //         username: req.body.username,
    //         email: req.body.email,
    //         password: req.body.password,
    //     }, 
    // }))
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).status(error))
})



module.exports = router;