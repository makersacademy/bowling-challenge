class BowlingGame {
  constructor(name) {
    this.name = name;
    this.total = 0;
    this.rounds = Array.from({ length: 21 }, () => 0);
    this.currentRound = 1;
  }

  addScore(score) {
    if (this.currentRound > 20) {
      throw Error("All rounds have been played.");
    }

    if (score < 0 || score > 10) {
      throw Error("Invalid score entered.");
    }

    const prevScore = this.rounds[this.currentRound - 1];
    let totalScore;

    if (this.currentRound % 2 === 0) {
      totalScore = prevScore + score;
      if (totalScore > 10 || score > 10 - prevScore) {
        throw Error(
          "Score entry error. Total score for one round cannot exceed 10."
        );
      }
    } else {
      totalScore = score;
    }

    this.rounds[this.currentRound] = score;
    this.currentRound++;

    if (this.currentRound > 20) {
      if (this.rounds[18] === 10 || this.rounds[18] + this.rounds[19] === 10) {
        this.currentRound++;
      }
    }
  }

  calculateTotalScore() {
    let total = 0;
    let currentRound = 1;

    for (let i = 0; i < 10; i++) {
      const score1 = this.rounds[currentRound];
      const score2 = this.rounds[currentRound + 1];
      const score3 = this.rounds[currentRound + 2];

      if (score1 === 10) {
        total += score1 + score3 + score3;
        currentRound++;
      } else if (score1 + score2 === 10) {
        total += score1 + score2 + score3;
        currentRound += 2;
      } else {
        total += score1 + score2;
        currentRound += 2;
      }
    }

    this.total = total;
    return total;
  }
}

class Game {
  constructor() {
    this.bowlers = [];
  }

  addBowler(name) {
    if (this.bowlers.length === 4) {
      throw Error("Maximum number of bowlers reached.");
    }

    const newBowler = new BowlingGame(name);
    this.bowlers.push(newBowler);
    return newBowler;
  }

  getBowlers() {
    return this.bowlers;
  }

  calculateWinners() {
    const bowlerScores = this.bowlers.map((bowler) => {
      return {
        name: bowler.name,
        score: bowler.calculateTotalScore(),
      };
    });

    bowlerScores.sort((a, b) => b.score - a.score);

    const highestScore = bowlerScores[0].score;

    const winners = bowlerScores.filter(
      (bowler) => bowler.score === highestScore
    );

    return winners;
  }
}

module.exports = {
  BowlingGame,
  Game,
};
