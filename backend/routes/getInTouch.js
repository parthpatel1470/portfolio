const router = require('express').Router();
let getInTouch = require('../models/getInTouch.models');
const mongoose = require('mongoose');

router.route('/').get((req, res) => {
    getInTouch.find()
        .then(getInTouchs => res.json(getInTouchs))
        .catch(err => res.status(400).json('Error :' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email=req.body.email;
    const description=req.body.description;
    const newgetInTouch = new getInTouch({ name,email,description });

    newgetInTouch.save()
        .then(() => res.json('getInTouch added !'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;