function Game() {
  var rolls = [];

  function roll(pinsdown) {
    rolls.push(pinsdown) ;
  }

  function score() {
    let score = 0;
    for (var i = 0; i < 20; i++) {
      score += rolls[i];
    }
    return score;
  }

  return {rolls: rolls, roll: roll,  score: score}

}
