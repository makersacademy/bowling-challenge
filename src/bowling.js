function Game() {
  var rolls = [];

  function roll(pinsdown) {
    rolls.push(pinsdown) ;
  }

  function score() {
    let score = 0;
    var rollindex =0;

    function isStrike() {
      return rolls[rollindex] == 10;
    }
    function getStrikeScore() {
      return rolls[rollindex] + rolls[rollindex + 1] + rolls[rollindex + 2];
    }

    function isSpare() {
      return rolls[rollindex] + rolls[rollindex + 1] == 10;
    }

    function getSpareScore() {
      return rolls[rollindex] + rolls[rollindex + 1] + rolls[rollindex + 2];
    }

    function getNormalScore() {
      return rolls[rollindex] + rolls[rollindex + 1];
    }

    for (var frames = 0; frames < 10; frames++) {
      if (isStrike()) {
        score += getStrikeScore();
        rollindex++;
      } else if (isSpare()) {
        score += getSpareScore();
        rollindex += 2;
      } else {
      score += getNormalScore();
      rollindex += 2;
      }
    }
    return score;


  }


  return {rolls: rolls, roll: roll,  score: score}

}
