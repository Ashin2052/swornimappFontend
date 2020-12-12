
const express = require('express');
const router = express.Router();
const itemFunction = require('../services/items.services');
let tokenValidation = require('../utilities/tokenValidator');


router.post('/', tokenValidation.checkToken, (req, res) => {
  itemFunction.addItem(req.body)
    .then(d => res.json(d))
    .catch(e => {
      res.status(403).json({ e });

    });
});


router.get('/', (req, res) => {

  itemFunction.getItemList()
    .then(d => {
      res.json(d);
      // res.render("info")
    })
    .catch(e => {
      res.status(403).json({ e });
    });
});

router.get('/:id', tokenValidation.checkToken, (req, res) => {
  itemFunction.getParlicaulaItem(req.params.id)
    .then(d => res.json(d))
    .catch(e => {
      res.status(403).json({ e });
    });
});
router.delete('/:id', tokenValidation.checkToken, (req, res) => {
  itemFunction.deleteItem(req.params.id)
    .then(d => res.json(d))
    .catch(e => {
      res.status(403).json({ e });
    });
});

router.put('/:id', tokenValidation.checkToken, (req, res) => {
  itemFunction.updateItem(req.body, req.params.id)
    .then(d => res.json(d))
    .catch(e => {
      res.status(403).json({ e });
    });
});
module.exports = router;
