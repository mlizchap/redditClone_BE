const Router = require('express').Router

const userController = require('../controllers/user');

const router = Router();

router.get('/', userController.list);
router.get('/:username', userController.retrieve);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

module.exports = router;