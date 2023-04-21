// create put update delete
const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');
const auMiddleware = require('../Middleware/AuthMiddleware');


router.get('/user',[
    auMiddleware.isAuthentication
], userController.getListUser);

router.post('/user/create', [
    auMiddleware.isAuthentication,
    auMiddleware.isAdmin
],userController.postUser);

router.delete('/user/delete/:userId', [
    auMiddleware.isAuthentication,
    auMiddleware.isAdmin
],userController.deleteUser);


module.exports = router;