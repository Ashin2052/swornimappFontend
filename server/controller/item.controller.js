
const express = require('express');
const router = express.Router();
const itemFunction = require('../services/items.services');
let tokenValidation = require('../utilities/tokenValidator');
let upload=require('../utilities/file.storage')
//
router.post('/',upload.single('image'), (req, res) => {
    itemFunction.addItem(req.body,req.file)
    .then(d => res.json(d))
    .catch(e => {
      res.status(403).json({error: e,message:'error' });
    });
});


router.post('/get', (req, res) => {
  itemFunction.getItemList(req.query.page,req.body)
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
router.delete('/:id', (req, res) => {
  itemFunction.deleteItem(req.params.id)
    .then(d => res.json(d))
    .catch(e => {
      res.status(403).json({ e });
    });
});

router.put('/:id',upload.single('image'), tokenValidation.checkToken, (req, res) => {
  
  itemFunction.updateItem(req.body, req.params.id,req.file)
    .then(d => res.json(d))
    .catch(e => {
      res.status(403).json({ e });
    });
});

module.exports = router;
