var Game = function() {
  this.rolls = [];

};
// Pushes pins_knocked_knocked into an empty array.
Game.prototype.roll = function(pins_knocked) {
  this.rolls.push(pins_knocked) 
};

//  This gives us the 2 rolls in each frame (10 frames)
Game.prototype.score = function() {
  var result = 0;
  var rollIndex = 0; 
  var game = this;
  // This will go through the 10 frames and give us the two rolls in each frame.
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    // If you get a spare, below gives us 3 rollIndex so we have 17 rolls left,
    //  and this way we get 3 rolls if we get a spare.
    if(isStrike()){
      result += StrikeScore();
      rollIndex++; 
      // rollIndex ++ gives us one roll in each frame since we only bowl once.

    } else if(isSpare()) {
      result += spareScore();
      rollIndex += 2
      // rollIndex += 2 gives us 2 rolls in each frame

    } else {
      result += regularScore();
      rollIndex += 2 
      // rollIndex += 2 gives us 2 rolls in each frame
    }
  };
  return result;

  function isStrike() {
    return game.rolls[rollIndex] == 10;
  };

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex+1] == 10;
  };
// Roll index is set to 0, so this will equal 3 + 1 (as we're incrementing it by 1 for strike.)
// This is why we have 16 roles left in the spec test
  function StrikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex+1] + game.rolls[rollIndex+2];
  };

  function spareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex+1] + game.rolls[rollIndex+2];
  };

  function regularScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex+1];
  };

};



