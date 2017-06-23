const route = require("express").Router();
const db = require ('../models');
const hotel = require('../models/hotel');

//console.log(db);

route.get("/", (req, res) => {
	var hotelPromise = db.Hotel.findAll();
	var restaurantPromise = db.Restaurant.findAll();
	var activityPromise = db.Activity.findAll();	
	var all = [hotelPromise, restaurantPromise, activityPromise];

	Promise.all(all)
	.then(results => {
		console.log(results);
  		res.render("index.html", {
  			hotels: results[0],
  			restaurants: results[1],
  			activities: results[2]

  		});	
	})


});

route.post("/login", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

module.exports = route;
