const models = ['User'];

module.exports = sequelize => {
  const mapped = {};
  models.forEach(model => {
    mapped[model] = sequelize.import(__dirname + '/' + model.toLowerCase());
  });
  return mapped;
}