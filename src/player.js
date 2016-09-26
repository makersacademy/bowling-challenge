function Player(name) {
  this.name = name;
}

Player.prototype = {
  addName: function() {
    return this.name;
  }
}
