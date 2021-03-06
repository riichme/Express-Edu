const { query } = require('express');

const router = require ('express').Router();


router.get ('/', (req, res) => {
    const {page, total} = req.query
    res.send({
    status: 'Succesfully',
    message: 'Welcome to Tutorial Exspress JS',
    page,
    total
})
})

router.get ('/product/:id', (req, res) => {

    
    res.json({
        id : req.params.id
    });
});

router.post('./product/:id', (req, res) => {
    res.json(req.body)
})

router.get ('/:category/:tag', (req, res) => {
    const {category, tag} = req.params;
    res.json({category, tag  });
    });

      
 module.exports = router;