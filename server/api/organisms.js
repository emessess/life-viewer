const router = require('express').Router();
const { Organism, Image } = require('../db/models');
module.exports = router;

// get all organisms
router.get('/', (req, res, next) => {
  Organism.findAll({
    include: [
      {
        model: Image
      }
    ]
  })
  .then(organisms => res.json(organisms))
  .catch(next);
});

// get one organism
