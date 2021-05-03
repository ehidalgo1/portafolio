const {Router} = require('express');
const router = Router();
const Info = require('../models/info');
const User = require('../models/user');
const path = require('path');


//get all
router.get('/', async (req, res) => {
    const infos = await Info.find().populate('user');
    res.json(infos);
});

//get one
router.get('/:id', async (req, res) => {
    const info = await Info.findById(req.params.id).populate('user');
    res.json(info);
});

//post
router.post('/', async (req, res) => {
    const {correo, cargo, resumen, pais, ciudad, tecnologias} = req.body;
    const user = await User.findOne({correo});
    if(!user){
        return res.status(404).json(`El correo ${correo} no está registrado`);
    }
    const info = new Info({
        user: user._id,
        cargo,
        resumen,
        pais,
        ciudad,
        tecnologias
    });
    await info.save();
    res.status(201).json(info);
});

router.put('/id', function (req, res) {
    res.json('Hola PUT');
});

router.delete('/id', function (req, res) {
    res.json('Hola DELETE');
});

module.exports = router;