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
    } else if(this.frameScore + score === 10) {
      this._countHelperWhenSpare(score);
    } else {
      this._countHelper(score);
    }
  }
  getTotalScore() {
    let gameScore = this.gameScore;
    let score_modified = [];
    gameScore.forEach(function(item, index) {
      if(item %2 === 0 && item === 10) {
        let indexPlusOne = gameScore[index + 1] === undefined ? 0 : gameScore[index + 1]
        let indexPlusTwo = gameScore[index + 2] === undefined ? 0 : gameScore[index + 2]
        let score = gameScore[index + 1] === 10 ? indexPlusOne + indexPlusTwo : indexPlusOne
        score_modified.push(gameScore[index] + score)
      } else {
        score_modified.push(item)
      }
    })
    return score_modified.reduce((a, b) => a + b, 0)
  }

  getFrameScore() {
    console.log(this.frameScore)
    name = this.frameScore;
    return this.frameScore.shift;
  }
  
  _countHelper(score) {
    if(this.firstBowl === false) {
      this.firstBowl = true;
      this.frame += 1;
      this.gameScore.push(this.frameScore + score);
      this.frameScore = 0;
    } else {
      this.firstBowl = false;
      this.frameScore = score;
    }
  }

  _countHelperWhenSpare() {
    let score = gameScore;
    let score_modified = [];
    score.forEach(function(item, index) {
      if((score[index] + score[index + 1]) === 10) {
        score_modified.push(score[index + 1] + score[index + 2])
      } else {
        score_modified.push(item)
      }
    })
  }
  
  _countHelperWhenStrike(score) {
    this.frame += 1;
    this.firstBowl = true;
    this.gameScore.push(score)
  }

}



// let score = [2, 3, 10, 0, 10, 0, 2];
// let score_modified = [];
// score.forEach(function(item, index) {
//   if(item %2 === 0 && item === 10) {
//     console.log(score[index])
//     let number = score[index + 1] === 10 ? score[index] + score[index + 1] + score[index + 2] : score[index + 1]
//     score_modified.push(score[index] + number)
//   } else {
//     score_modified.push(item)
//   }
// })

// console.log(score_modified)

// let score = [2, 8, 10, 2, 2];
// let score_modified = [];
// score.forEach(function(item, index) {
//   if((score[index] + score[index + 1]) === 10) {
//     console.log(score[index + 1] + score[index + 2])
//     // console.log(item[index] + item[index + 1])
//     score_modified.push(score[index] + score[index + 1])
//   } else {
//     score_modified.push(item)
//   }
// })

// console.log(score_modified)

let firstBowl = true;
let frame = 0;
let gameScore = [10, 10, 10, 10, 10, 10];
let frameScore = 0;

let score_modified = [];
gameScore.forEach(function(item, index) {
  if(item %2 === 0 && item === 10) {
    let indexPlusOne = gameScore[index + 1] === undefined ? 0 : gameScore[index + 1]
    let indexPlusTwo = gameScore[index + 2] === undefined ? 0 : gameScore[index + 2]
    let score = gameScore[index + 1] === 10 ? indexPlusOne + indexPlusTwo : indexPlusOne
    score_modified.push(gameScore[index] + score)
  } else {
    score_modified.push(item)
  }
})
let total = score_modified.reduce((a, b) => a + b, 0)


console.log(score_modified)
console.log(total)
