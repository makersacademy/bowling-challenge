'use strict'
class Score{
  constructor(points){
    this.points = []
    this.frame = 0
  }

  roll(roll1, roll2) {
    this.frame += 1    
    this.points.push([roll1, roll2])
  }

  gutterGame() {
    return this.frame === 10 && this.points.flat().reduce((a,b) => a+b, 0) === 0 ? true : false
  }

  strike(strikeFrame = this.frame) {
    return (this.points[strikeFrame - 1][0]) === 10 ? true : false
  }

  strikeBonus(strikeFrame = this.frame) {
    return this.frame === 10 ? this.finalFrameBonus(this.bonusRoll) : this.points[strikeFrame].reduce((a,b) => a+b, 0) 
  }

  spare(spareFrame = this.frame) {
    return (this.points[spareFrame - 1].reduce((a,b) => a+b, 0) === 10) && (!this.strike(spareFrame)) ? true : false
  }

  spareBonus(spareFrame = this.frame) {
    return this.frame === 10 ? this.finalFrameBonus(this.bonusRoll) : this.points[spareFrame][0]
  }

  finalFrameBonus(bonusRoll = 0) {
    return (this.frame === 10 && (this.strike(this.strikeFrame) || this.spare(this.spareFrame))) ? bonusRoll : 0
  }

  frameScore(frame = this.frame) {
    let frameScore = this.points[frame - 1].reduce((a,b) => a+b, 0)
    console.log(this.finalFrameBonus())

    
    if (this.strike(frame)) {
      return this.strikeBonus(frame) + frameScore 
    }else if (this.spare(frame)) {
      return this.spareBonus(frame) + frameScore
    } else{
      return frameScore
    }
  }
}
