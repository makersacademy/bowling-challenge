function Player() {

}

Player.roll = function(max) {
  return Math.floor(Math.random() * (max + 1));
};

Player.rollFrame = function(frame) {
  var roll = Player.roll(10);
  frame.firstRoll(roll);
  if (!frame.isStrike()) {
    frame.secondRoll(Player.roll(10 - roll));
  }
  return frame;
};

Player.rollBonusFrame = function(frame, type) {
  var roll = Player.roll(10);
  frame.firstRoll(roll);
  if (type === "strike") {
    frame.secondRoll(Player.roll(10 - roll));
  }
  return frame;
};
