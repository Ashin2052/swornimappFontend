const Router = require('express').Router;
let router = Router();
const catagoryFunction = require('../services/catagory.service')
var tokenValidation = require('../utilities/tokenValidator')


router.post('/', tokenValidation.checkToken, (req, res) => {
    catagoryFunction.addCatagory(req.body)
        .then(d => res.json(d))
        .catch(e => {
            res.status(403).json({ e });

        });
})


router.get('/', (req, res) => {
    catagoryFunction.getCatagoryList()
        .then(d => {
            res.json(d)
            // res.render("info")
        })
        .catch(e => {
            res.status(403).json({ e });
        });
})

router.get('/:id', tokenValidation.checkToken, (req, res) => {
    catagoryFunction.getParlicaulaCatagory(req.params.id)
        .then(d => res.json(d))
        .catch(e => {
            res.status(403).json({ e });
        });
})
router.delete('/:id', tokenValidation.checkToken, (req, res) => {
    catagoryFunction.deleteCatagory(req.params.id)
        .then(d => res.json(d))
        .catch(e => {
            res.status(403).json({ e });
        })
})

router.put('/:id', tokenValidation.checkToken, (req, res) => {
    catagoryFunction.updateCatagory(req.body, req.params.id)
        .then(d => res.json(d))
        .catch(e => {
            res.status(403).json({ e });
        })
})

module.exports = router;
