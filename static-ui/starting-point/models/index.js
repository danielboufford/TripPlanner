const db = require("./db");
const Sequelize = require("sequelize");
const Place = require("./Place");
const Activity = require("./Activity");
const Hotel = require("./Hotel");
const Restaurant = require("./Restaurant");
// Require your models
// Make associations etc


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = {
  db,
  Place,
  Hotel,
  Activity,
  Restaurant
};

































