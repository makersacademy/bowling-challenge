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
      console.log(i)

        let currentStrike = (scoreTracker[i][0] === 10 && scoreTracker[i][1] ===0);
        let previousStrike = (i !== 0) && (scoreTracker[i - 1][0] === 10);
        let currentSpare = (scoreTracker[i][0] + scoreTracker[i][1] === 10) && (scoreTracker[i][0] !== 10);
        let previousSpare = (i !== 0) && (scoreTracker[i - 1][0] + scoreTracker[i - 1][1] === 10);
        let standardScore = (scoreTracker[i][0] + scoreTracker[i][1]);

        if (currentSpare && previousSpare) { score += 10 + scoreTracker[i][0]; console.log('cpsp') } else
        if (currentStrike && previousStrike) { score += (standardScore * 2) + 10; console.log('cpst') } else
        if (currentStrike) {score += 0; console.log('st')} else
        if (currentSpare) {score += 0; console.log('sp')} else
        if (previousStrike) { score += (standardScore * 2) + 10; console.log('pst')} else
        if (previousSpare) { score += 10 + scoreTracker[i][0] + standardScore; console.log('psp')} else
        { score += standardScore; console.log('n')}
    };

    return score;
  };

  return {calculateScore: calculateScore, scoreTracker: scoreTracker, add: add}

};
