'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    google_id: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: models => {
        const { user, group } = models
        console.log('PENUS',user.hasMany(group))
        return user.sync
      }
    }
  });
  return User;
};