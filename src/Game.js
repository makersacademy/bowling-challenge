function Weather() {

}

Weather.prototype.setWeather = function() {
  var a = ["sunny", "stormy", "cloudy", "rainy"]
  var weather = a[Math.floor(Math.random()*a.length)];
  return weather
};
