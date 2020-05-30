'use strict';

class Bowling {

  constructor() {
    this.MAX_FRAME_SCORE = 10
    this.MAX_FRAMES = 10
    this.firstBowl = true
    this.pins
    this.frame = 0
    this.frameScore
    this.gameScore = new Array(12).fill([0,0])
  }
  countScore(score) {
    if(this.frame === this.MAX_FRAMES) {
      this._resetTheGame()
    } else {
      this._countTotalScore(score)
    }
    this.pins = score
  }
  _resetTheGame() {
    this.firstBowl = true
    this.pins
    this.frame = 0
    this.frameScore
    this.gameScore = new Array(12).fill([0, 0])
  }

  _countTotalScore(score) {
    if(score === this.MAX_FRAME_SCORE && this.firstBowl === true) {
      this._countWhenStrike(score)
    } else {
      this._countFrame(score)
    }
  }
  getTotalScore() {
    let gameScore = this.gameScore
    let scoreModified = []
    gameScore.forEach(function(item, index) {
      if(gameScore[index][0] === 10) {
        _whenStrike(gameScore, index, scoreModified)
      } else if((gameScore[index].reduce((a, b) => a + b, 0)) === 10) {
        _whenSpare(gameScore, index, scoreModified)
      } else {
        _whenFrame(scoreModified, gameScore, index)
      }
    })
    return scoreModified.reduce((a, b) => a + b, 0)
  }
  
  _countFrame(score) {
    if(this.firstBowl === false) {
      this.gameScore[this.frame] = [this.frameScore, score]
      this.firstBowl = true
      this.frameScore = 0
      this.frame += 1
    } else {
      this.firstBowl = false
      this.frameScore = score
    }
  }
  _countWhenStrike(score) {
    this.gameScore[this.frame] = [score, 0]
    this.firstBowl = true
    this.frame += 1
  }

}
