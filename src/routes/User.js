const Router = require('express').Router
const models = require('../models').models;

const userController = require('../controllers/user');

const router = Router();

// router.get('/all', (req, res) => {
//     models.User.findAll({})
//         .then(user => res.send(user))
// })


// router.get('/:username', (req, res) => {
//     models.User.findAll({
//         where: {
//             username: req.params.username
//         }
//     })
//     .then(user => {
//         if (user.length === 0) {
//             res.status(500).send('user not found')
            
//         } else {
//             res.send(user)
//         }
//     })
// })

// router.post('/new', (req, res) => {
//     console.log(req.body.username, req.body.email, req.body.password,)
//     return models.User.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//     })
//     .then(user => res.status(201).send(user))
//     .catch(error => res.status(400).status(error))
// })

router.put('/edit/:id', (req, res) => {
    console.log('test')

    // const id = parseInt(req.params.id)
    // console.log(id)
    // models.User.findByPk(id)
    //     console.log(id)
        // .then(user => {
        //     if (!user) {
        //         return res.status(404).send({ message: 'User Not Found' });
        //     }
        //     return user
        //         .update({ 
        //             email: req.body.email,
        //             // password: req.body.password || user.password,
        //         })
        //         .then(() => res.status(200).send(user))  
        //         .catch((error) => res.status(400).send(error));
        //     })
        // .catch((error) => res.status(400).send(error));
})


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)

    models.User.findByPk(id)
        .then(user => {
        if (!user) {
            return res.status(400).send({
            message: 'User Not Found',
            });
        }
        return user
            .destroy()
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
        })
    .catch(error => res.status(400).send(error));
})

///////////
router.get('/', userController.list);
router.get('/:username', userController.retrieve);
router.post('/', userController.create);
router.put('/:id', userController.edit);



    



module.exports = router;