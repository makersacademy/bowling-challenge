function ScoreCard() {
  var scoreTracker = [[], [], [], [], [], [], [], [], [], []];

  function scoreTracker() {
    return scoreTracker;
  };

  function add(score, round) {
      if (scoreTracker[round] === []) { scoreTracker[round].push(score) } else
      if (scoreTracker[round][0] === 10) { scoreTracker[round].push(0) } else {
        scoreTracker[round].push(score);
      };
  };

  function calculateScore(round) {
    let score = 0;
    for (i = 0; i <= round; i++) {
        if (scoreTracker[i].length === 1) {
          score += 0;
        } else if (scoreTracker[i][0] + scoreTracker[i][1] === 10) {
          score += 0;
        } else if (i !== 0 && scoreTracker[i - 1][0] + scoreTracker[i - 1][1] === 10) {
          score += (10 + scoreTracker[i][0]) + scoreTracker[i][0] + scoreTracker[i][1];
        } else if ( i !== 0 && scoreTracker[i - 1].length === 1 ) {
          score += (scoreTracker[i][0] + scoreTracker[i][1] + 10) + (scoreTracker[i][0] + scoreTracker[i][1]);
        } else {
        score += (scoreTracker[i][0] + scoreTracker[i][1]);
      }
    };
    return score;
  };

  return {calculateScore: calculateScore, scoreTracker: scoreTracker, add: add}

};
