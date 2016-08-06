function Player(player_name) {
  this._name = player_name;
}
Player.prototype = {
  name: function() {
    return this._name
  },
  roll: function() {
    return 0;
  }

};

// player rolls two times(first)
// lets implement the gutter game first - player always rolls 0
