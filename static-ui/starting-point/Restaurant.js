const db = require("./db");
const Sequelize = require("sequelize");

const Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING //unsure
	},
	price: {
		type: Sequelize.INTEGER //has to be 1-5, unsure
	}
});

module.exports = Restaurant;