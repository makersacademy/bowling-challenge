
class Game {
  //import { Frame } from './frame.js'
  constructor() {
    this.frames = new Array
    this.totalScore = 0
    this.currentFrame = new Frame
  }
  //below function moved to Frame Class
  frameEnded() {
   return (this.currentFrame.shots.length == 2 || this.currentFrame.roundGetsBonus())
  }

  startNextFrame() {
    if(this.currentFrame.frameEnded()){
      this.frames.push(this.currentFrame)
      this.currentFrame = new Frame
    }
    if (this.frames.length > 2){this.addBonusScores()}
    if (this.frames.length > 1) {this.addSpareBonus()}
  }

  updateCurrentScore() {
    if(this.frames[this.frames.length-1].roundGetsBonus() && this.frames.length != 10){
   var nonBonusFrames = this.frames.filter(frame => this.frames.indexOf(frame) < 10)
 //  if(this.frames.length > 9){console.log(nonBonusFrames)}
   var allScores =  nonBonusFrames.map((frame) => frame.score)

   this.totalScore = allScores.reduce((a,b) => a + b )
    }else{
      this.totalScore = this.frames.map(frame => frame.score).reduce((a,b) => a+b)
    }
  }

  addBonusScores() {
    if(this.frames[this.frames.length-3].strike == true && this.frames[this.frames.length-3].bonusAdded == false ){
      var followingRolls = this.frames[this.frames.length-2].shots.concat(this.frames[this.frames.length-1].shots)
      var pointsToAdd = followingRolls[0] + followingRolls[1]
      this.frames[this.frames.length-3].score += pointsToAdd
      this.frames[this.frames.length-3].bonusAdded = true 
    }
  }
    addSpareBonus(){
     if(this.frames[this.frames.length-2].spare == true && this.frames[this.frames.length-2].bonusAdded == false){
      var pointsToAdd = this.frames[this.frames.length-1].shots[0]
      this.frames[this.frames.length-2].score += pointsToAdd
      this.frames[this.frames.length-2].bonusAdded = true}
    }
    
  

  
  addBonusRound() {
    if(this.frames.length === 10 && this.frames[this.frames.length-1].strike){
      return true
    }else if(this.frames.length === 10 && this.frames[this.frames.length-1].spare) {
      return true
    }else{return false} 
  }
  gameEnded() {
    if(this.frames.length === 10 && !this.addBonusRound()) {
      return true
    }else{ 
      return false }
  }
  



}