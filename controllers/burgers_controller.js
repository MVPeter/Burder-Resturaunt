const express = require('express');

const router = express.Router()

const burger = require('../models/burger.js')

//get route
router.get('/', (req, res) => {
    burger.all((data) => {
        const burgerObject = {
            burgers: data,
        };
        // console.log('burgerObject', burgerObject);
        console.log(burgerObject);
        res.render('index', burgerObject);
    });
});

//post route
router.post('/api/newBurger', (req, res) => {
    let createBurger = req.body.burger_name.trim()
    console.log(createBurger)
    burger.create([createBurger], (result) => {
        res.send('POST complete');
    });
});

// put route
router.put('/api/burger/:id', (req, res) => {
    console.log(req.body.eaten)
    let status = "";
    if (req.body.eaten === "false") {
        status = true;
    } else {
        status = false;
    }

    burger.update(status, req.params.id, (result) => {
        res.status(200).end();
    })
    console.log("eaten " + status)
    console.log("ID " + req.params.id)
   
    // burger.update (["burger", req.params.id ])
})

module.exports = router;