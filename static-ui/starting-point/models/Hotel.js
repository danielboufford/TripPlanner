const db = require("./db");
const Sequelize = require("sequelize");

const Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.FLOAT,
		validate: {
			min: 1,
			max: 5
		}
	},
	amenities: {
		type: Sequelize.TEXT
	}
});

module.exports = Hotel;