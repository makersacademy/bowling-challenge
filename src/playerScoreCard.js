function playerScoreCard() {
  var scoreTracker = [[], [], [], [], [], [], [], [], [], []];

  function scoreTracker() {
    return scoreTracker;
  };

  function add(score, round) {
      if (scoreTracker[round].length === 0 && score === 10) {
        scoreTracker[round].push(score, 0) } else {
        scoreTracker[round].push(score);
      };
  };

  function calculateScore(round) {
    let score = 0;

    for (i = 0; i <= round; i++) {

        let previousStrike = i !== 0 && scoreTracker[i - 1][0] === 10;
        let currentSpare = scoreTracker[i][0] + scoreTracker[i][1] === 10;
        let previousSpare = i !== 0 && scoreTracker[i - 1][0] + scoreTracker[i - 1][1] === 10;
        let standardScore = scoreTracker[i][0] + scoreTracker[i][1];

        if (previousStrike) { score += (standardScore * 2) + 10;} else
        if (previousSpare) { score += 10 + scoreTracker[i][0] + standardScore} else
        if (currentSpare) { score += 0 } else
        { score += standardScore}
    };
    return score;
  };

  return {calculateScore: calculateScore, scoreTracker: scoreTracker, add: add}

};
