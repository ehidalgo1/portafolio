const {Router, Request} = require('express');
const router = Router();
const User = require('../models/user');

router.get('/', function (req, res) {
    res.json('Hola GET');
});

router.post('/', async (req = Request, res) => {
    const {nombre, correo} = req.body;
    const user = new User({nombre, correo});
    await user.save();
    res.json(user);
});

router.put('/', function (req, res) {
    res.json('Hola PUT');
});

router.delete('/', function (req, res) {
    res.json('Hola DELETE');
});

module.exports = router;