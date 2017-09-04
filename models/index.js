const path = require('path');
const models = ['User'];

module.exports = sequelize => {
  const mapped = {};
  models.forEach(model => {
    mapped[model] = sequelize.import(path.join(__dirname, model.toLowerCase()));
  });
  return mapped;
}