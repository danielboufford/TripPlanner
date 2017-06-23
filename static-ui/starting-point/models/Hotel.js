const db = require("./db");
const Sequelize = require("sequelize");

const Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.FLOAT(1, 5) //unsure
	},
	amenities: {
		type: Sequelize.TEXT
	}
});

module.exports = Hotel;