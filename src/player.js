function Player(){
};

Player.prototype.roll = function(pins) {
  return pins;
};

Player.prototype.rollType = function(pins) {
  if (pins == 10) {
    return 'strike';
  } else if (pins < 10 && pins != 0) {
    return 'normal';
  } else {
    return 'gutter';
  }
};