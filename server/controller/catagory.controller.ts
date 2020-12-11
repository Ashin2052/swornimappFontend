
const express = require('express');
const router = express.Router();
// const paragraphFunction = require('../services/Paragraph.services');
let tokenValidation = require('../utilities/tokenValidator');


// router.post('/', tokenValidation.checkToken, (req, res) => {
//   paragraphFunction.addParagraph(req.body)
//     .then(d => res.json(d))
//     .catch(e => {
//       res.status(403).json({ e });

//     });
// });


// router.get('/', (req, res) => {

//   paragraphFunction.getParagraphList()
//     .then(d => {
//       res.json(d);
//       // res.render("info")
//     })
//     .catch(e => {
//       res.status(403).json({ e });
//     });
// });

// router.get('/:id', tokenValidation.checkToken, (req, res) => {
//   paragraphFunction.getParlicaulaParagraph(req.params.id)
//     .then(d => res.json(d))
//     .catch(e => {
//       res.status(403).json({ e });
//     });
// });
// router.delete('/:id', tokenValidation.checkToken, (req, res) => {
//   paragraphFunction.deleteParagraph(req.params.id)
//     .then(d => res.json(d))
//     .catch(e => {
//       res.status(403).json({ e });
//     });
// });

// router.put('/:id', tokenValidation.checkToken, (req, res) => {
//   paragraphFunction.updateParagraph(req.body, req.params.id)
//     .then(d => res.json(d))
//     .catch(e => {
//       res.status(403).json({ e });
//     });
// });
module.exports = router;
