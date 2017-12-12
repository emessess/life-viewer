const Sequelize = require('sequelize');
const db = require('../db');

const Organism  = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  kingdom: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Taxonomy unknown.'
  },
  phylum: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Taxonomy unknown.'
  },
  class: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Taxonomy unknown.'
  },
  order: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Taxonomy unknown.'
  },
  genus: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Taxonomy unknown.'
  },
  species: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Taxonomy unknown.'
  },
});

module.exports = Organism;

