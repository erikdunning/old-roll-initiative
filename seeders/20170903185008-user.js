'use strict';

const Models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    Models(queryInterface.sequelize).then(models => {

    })
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
