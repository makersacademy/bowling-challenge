class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }
  // 10 frames in a bowling game so that's why frame index is 10.

  score() {
    let result = 0;
    let rollIndex = 0;
    let game = this;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      if (isStrike()) {
        result += getStrikeScore();
        // All pins knocked down so rollIndex is only 1.
        rollIndex++;
      } else if (isSpare()) {
        result += getSpareScore();
        // All pins knocked down on 2 rolls so rollIndex is 2.
        rollIndex += 2;
      } else {
        result += getNormalScore();
        // This will go through the ten frames and give us the two rolls in each frame
        rollIndex += 2;
        // Not all pins were knocked down but there were 2 rolls so roll
        // Index is 2
      }
    }

    return result;

    // Helper methods, helps us writing out the same steps over and over.
    function isSpare() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
    }

    function isStrike() {
      return game.rolls[rollIndex] == 10;
    }
    // game.rolls[rollIndex] + game.rolls[rollIndex + 1] - These two for the frame
    // game.rolls[rollIndex + 2]; - Plus one bonus roll
    function getSpareScore() {
      return (
        game.rolls[rollIndex] +
        game.rolls[rollIndex + 1] +
        game.rolls[rollIndex + 2]
      );
    }

    // game.rolls[rollIndex] - This one for the whole frame
    // game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2] - Plus these for two bonuses.
    function getStrikeScore() {
      return (
        game.rolls[rollIndex] +
        game.rolls[rollIndex + 1] +
        game.rolls[rollIndex + 2]
      );
    }

    function getNormalScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
    }
  }
}
