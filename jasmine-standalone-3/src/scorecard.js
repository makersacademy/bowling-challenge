class Scorecard {
  constructor (rolls = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]]) {
    this.rolls = rolls
    this.cleanse()
  }

  getRolls () {
    return this.rolls
  }

  setScore (frame, roll, score) {
    this.rolls[frame - 1][roll - 1] = score
    this.cleanse()
  }

  cleanse () {
    for (let i = 0; i < 9; i++) {
      if (['x', 'X'].includes(this.rolls[i][0]) || ['x', 'X'].includes(this.rolls[i][1])) {
        this.rolls[i][0] = 10
        this.rolls[i][1] = 0
      } else if (this.rolls[i][1] === '/') {
        this.rolls[i][1] = 10 - parseInt(this.rolls[i][0])
      }
      this.rolls[i][0] = parseInt(this.rolls[i][0])
      this.rolls[i][1] = parseInt(this.rolls[i][1])
    }
    if (this.rolls[9][1] === '/') {
      this.rolls[9][1] = 10 - parseInt(this.rolls[9][0])
    }
    this.rolls[9][0] = parseInt(this.rolls[9][0])
    this.rolls[9][1] = parseInt(this.rolls[9][1])
    this.rolls[9][2] = parseInt(this.rolls[9][2])
    for (let i = 0; i < this.rolls[9].length; i++) {
      if (['x', 'X'].includes(this.rolls[9][i])) {
        this.rolls[9][i] = 10
      }
    }
  }

  score (rolls = this.rolls) {
    let score = 0
    for (let i = 1; i < 11; i++) {
      score += this.frameScore(i)
    }
    return score
  };

  frameScore (frame) {
    const fr = frame - 1
    var score = 0
    if (fr === 9) {
      if (this.rolls[9][0] === 10) {
        score += (this.rolls[9][0] + this.rolls[9][1] + this.rolls[9][2])
      }
      if (this.rolls[9][1] === 10) {
        score += (this.rolls[9][1] + this.rolls[9][2])
      }
      score += this.rolls[9][2]
    } else {
      score += (this.rolls[fr][0] + this.rolls[fr][1])
      if (this.frameOutcome(fr) === 'X') {
        score += (this.rolls[fr + 1][0] + this.rolls[fr + 1][1])
        if(this.frameOutcome(fr + 1) === 'X') {
          score += fr !== 8 ? this.rolls[fr + 2][0] : this.rolls[9][1]
        }
      } else if (this.frameOutcome(fr) === '/') {
        score += (this.rolls[fr + 1][0])
      };
    }
    return fr === 9 ? score : score
  };

  cumScore (frame) {
    var score = 0
    for (var i = 1; i < (frame + 1); i++) {
      score += this.frameScore(i)
    }
    return score
  }

  frameOutcome (fr) {
    return this.rolls[fr][0] + this.rolls[fr][1] !== 10 ? '-' : this.rolls[fr][0] === 10 ? 'X' : '/'
  };
};
