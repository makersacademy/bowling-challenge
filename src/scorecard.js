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
        score += (scoreTracker[i][0] + scoreTracker[i][1]);
    };
    return score;
  };

  return {calculateScore: calculateScore, scoreTracker: scoreTracker, add: add}

};
