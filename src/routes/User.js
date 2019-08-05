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

module.exports = router;