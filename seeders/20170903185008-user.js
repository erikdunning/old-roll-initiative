'use strict';

const modelLoader = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    const models = modelLoader(queryInterface.sequelize);
    /*
      return a promise here
    */

    /*
    return queryInterface.bulkInsert('Users', [{
      google_id: 'test id',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    */
  },

  down: function (queryInterface, Sequelize) {
  }
};
