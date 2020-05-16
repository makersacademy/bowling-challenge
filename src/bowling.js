class Bowling {

  constructor() {
    this.MAX_FRAME_SCORE = 10;
    this.firstBowl = true;
    this.frame = 1;
    this.frameScore;
    this.gameScore = [];
  }

  countScore(score) {
    if(score === this.MAX_FRAME_SCORE && this.firstBowl === true) {
      this._countHelperWhenStrike(score);
    } else {
      this._countHelper(score);
    }
  }
  getTotalScore() {
    let gameScore = this.gameScore;
    let score_modified = [];
    gameScore.forEach(function(item, index) {
      if(gameScore[index][0] === 10) {
        let indexPlusOne = gameScore[index + 1] === undefined ? 0 : gameScore[index + 1].reduce((a, b) => a + b, 0);
        let indexPlusTwo = gameScore[index + 2] === undefined ? 0 : gameScore[index + 2][0];
        let score = gameScore[index + 1] === undefined ? 0 : gameScore[index + 1][0] === 10 ? indexPlusOne + indexPlusTwo : indexPlusOne;
        let frameTotal = gameScore[index][0]
        score_modified.push(frameTotal + score)
      } else if((gameScore[index].reduce((a, b) => a + b, 0)) === 10) {
        let frameTotal = gameScore[index].reduce((a, b) => a + b, 0);
        let score = gameScore[index + 1] === undefined ? 0 : gameScore[index + 1][0] === undefined ? 0 : gameScore[index + 1][0];
        score_modified.push(frameTotal + score)
      } else {
        score_modified.push(gameScore[index].reduce((a, b) => a + b, 0))
      }
    })
    return score_modified.reduce((a, b) => a + b, 0)
  }
  
  _countHelper(score) {
    if(this.firstBowl === false) {
      this.firstBowl = true;
      this.frame += 1;
      this.gameScore.push([this.frameScore, score]);
      this.frameScore = 0;
    } else {
      this.firstBowl = false;
      this.frameScore = score;
    }
  }
  _countHelperWhenStrike(score) {
    this.frame += 1;
    this.firstBowl = true;
    this.gameScore.push([score, 0])
  }

}


function one() {
  return this.two();
}

function two() {
  // console.log('hello')
  return 'hello'
  
}

console.log(one())