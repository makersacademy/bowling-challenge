
class Bowling {

    constructor(){
        this.score = 0
        this.scoreCard = [[],[],[],[],[],[],[],[],[],[]]
        this.frameCount = 1
        this.rollCount = 0 
        this.times = 1  
        this.bonusCount = 0             
    }

    getCurrentScore(){
        return this.score
    }

    roll(Roll) {
        this.rollCount += 1
       // Roll *= this.times
        this.resetBonus()  
        this.scoreCard[this.frameCount - 1].push(Roll)
        if (Roll === 10) {
            this.rollCount += 1
            this.frameCount += 1
        } else if (this.rollCount % 2 === 0) {
            this.frameCount += 1
           // this.rollCount = 0 
        } 
        return Roll
    } 

    calculateScore(roll) {
       
        if (this.frameCount === 2 && roll === 10) {
            this.score += 10
            this.times = 2
            this.bonusCount += 1
        } else if (this.frameCount === 2 && this.rollCount === 2 && (roll + this.scoreCard[this.frameCount][0]) === 10 ) {
            this.times = 2
            this.score += roll
        }
          else if (this.frameCount === 2) {
            this.score += roll
          }
        else if (this.scoreCard[this.frameCount - 2] === 10 && this.rollCount % 2 !== 0) {
            this.times = 2
            this.bonusCount += 1
            this.score += (roll *= this.times) // can maybe do another else statement to add bonus count
        }
        else if (this.scoreCard[this.frameCount - 2] === 10) {
            this.bonusCount += 1
            this.score += (roll *= this.times)
        }
        else if (this.scoreCard[this.frameCount - 2][0] + this.scoreCard[this.frameCount - 2][1] === 10 && this.rollCount % 2 !== 0) {
            this.times = 2
            this.score += (roll *= this.times)
        } else {
            
       this.score += (roll *= this.times)
        }
       
    }

    resetBonus() {
        if (this.frameCount === 1) {
          console.log('js was here')
        }
        else if (this.scoreCard[this.frameCount - 2][0] === 10 && this.bonusCount === 2) {
        this.times = 1
        this.bonusCount = 0
        } else if (this.scoreCard[this.frameCount - 2][0] !== 10 ) {
            this.times = 1
        }
    }


    spare(firstRoll, secondRoll) {
      

    }

    strike(firstRoll, secondRoll) {
        
    }
}