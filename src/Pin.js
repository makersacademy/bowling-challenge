var Pin = function() {
  this.standing = true;
};

Pin.prototype.fall = function() {
  this.standing = false;
};

Pin.prototype.qwerty = function() {
  if (this.standing === false) {
    return "not standing";
  } else {
    return "standing";
  }
};