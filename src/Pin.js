var Pin = function () {
  this.isStanding = true;
};

Pin.prototype.hit = function() {
  this.isStanding = false;
};