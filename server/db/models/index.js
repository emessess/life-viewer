const User = require('./user');
const Image = require('./image');
const Organism = require('./organism')

/**
 * Associations
 */

 Image.belongsTo(Organism);

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Image,
  Organism
};

