function Player(name) {
  var _name;

  this._name = name;

}

Player.prototype.getName = function() {
  return this._name;
};