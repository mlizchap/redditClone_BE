const Router = require('express').Router
const models = require('../models').models;

const router = Router();

router.get('/user/all', (req, res) => {
    models.User.findAll({})
        .then(user => res.send(user))
})