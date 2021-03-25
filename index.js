<<<<<<< HEAD
//jshint esversion:6
const https = require('https');
const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
const bodyparser = require("body-parser");



app.use(bodyparser.urlencoded({
  extended: true
}));
// const urlencodedParser = bodyparser.urlencoded({extended: false});
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");


});


app.post("/", function(req, res) {
    var city = '';
    city = req.body.city;
    console.log(city);
    if(city === '')
    {
      res.sendFile(__dirname + "/failure.html");
    }
    const appId = "72e259fefa0f4f0ece05e90510188ef9";

    const units = "imperial";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${appId}`;

    console.log(res.statusCode);


    https.get(url, function(response) {


      console.log(response.statusCode);
      response.on('data', function(d) {
        const weatherData = JSON.parse(d);
        const feelsLike = weatherData.main.feels_like;
        const temperture = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

        res.render('result', {
          weather: city,
          temp: temperture,
          feels: feelsLike,
          description: description,
          image: imgURL
        });

      });
    });

});
app.post("/failures", function(req,res){
  res.redirect("/");
});

app.post('/result', function(req, res) {
  res.redirect("/");
});


app.listen(process.env.PORT || port, function() {
  console.log("Server is running!");
});
=======
//jshint esversion:6
const https = require('https');
const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
const bodyparser = require("body-parser");



app.use(bodyparser.urlencoded({
  extended: true
}));
// const urlencodedParser = bodyparser.urlencoded({extended: false});
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");


});


app.post("/", function(req, res) {
    var city = '';
    city = req.body.city;
    console.log(city);
    if(city === '')
    {
      res.sendFile(__dirname + "/failure.html");
    }
    const appId = "72e259fefa0f4f0ece05e90510188ef9";

    const units = "imperial";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${appId}`;

    console.log(res.statusCode);


    https.get(url, function(response) {


      console.log(response.statusCode);
      response.on('data', function(d) {
        const weatherData = JSON.parse(d);
        const feelsLike = weatherData.main.feels_like;
        const temperture = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

        res.render('result', {
          weather: city,
          temp: temperture,
          feels: feelsLike,
          description: description,
          image: imgURL
        });

      });
    });

});
app.post("/failures", function(req,res){
  res.redirect("/");
});

app.post('/result', function(req, res) {
  res.redirect("/");
});


app.listen(process.env.PORT || port, function() {
  console.log("Server is running!");
});
>>>>>>> afaca50ea551614cd5f66d6423c009145ec55797
