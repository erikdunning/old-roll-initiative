const path = require('path');
const fs = require('fs');
const logger = require('../modules/logger')
const _ = require('lodash');

module.exports = sequelize => {
  return new Promise((resolve, reject) => {
    /* Load / map the available models. */
    const mapped = {};
    fs.readdir('./src', (err, files) => {
      _.each(files, model => {
        if(_.includes(model, '.js') && !_.includes(model,'index')){
          mapped[model] = sequelize.import(path.join(__dirname, model));
          const pendingAssociations = []
          _.each(mapped, model => pendingAssociations.push(model.associate()))
          Promise.all(pendingAssociations).then(resolve).catch(reject)
        }
      });
    });

  });
}